import { cookies } from "next/headers";
import decrypt  from "../../libs/utils/auth";

export default async function AuthStatus({ signedIn, signedOut }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  const payload = session ? await decrypt(session).catch(() => null) : null;

  if (payload) return <>{signedIn}</>;
  return <>{signedOut}</>;
}