import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.NEXT_JWT_SECRET);

export async function encrypt(payload) {
  if (!payload) return null;
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret); 
}

 async function decrypt(input) {
    const { payload } = await jwtVerify(input, secret, {
      algorithms: ["HS256"],
    });
    return payload;
  
}

export async function getToken() {

  const cookieStore = await cookies()
  const token = cookieStore.get("session")

  try {
    const payload = await decrypt(token.value);
    if (payload.expires < Date.now()) {
      throw new Error("Token Expired");
    }
    return payload;
  } catch (error) {
    console.error("Token Verification Error:", error.message);
    throw new Error("Invalid Token");
  }
}

export default decrypt;