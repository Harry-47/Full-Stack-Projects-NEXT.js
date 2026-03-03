"use server";
import { encrypt } from "../../utils/auth";
import { cookies } from "next/headers";
import connectDB from "../../utils/db";
import User from "../../models/User";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  try {
    await connectDB();
    const { email, password } = Object.fromEntries(formData.entries());

    const user = await User.findOne({ email }).select("+password");
    if (!user) return { error: "Please Sign Up First!" };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: "Wrong Password Entered!" };

    //  Session Creation(token)
    const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
    const session = await encrypt({
      userId: user._id.toString(),
      email: user.email,
      expires,
    });

    //  Cookie Setting
    (await cookies()).set("session", session, {
      expires,
      httpOnly: true,
      secure: true,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "An error occurred during login. Please try again." };
  }

  return redirect("/verify");
}

export async function signup(prevState, formData) {
  await connectDB();
  const { name, email, password } = Object.fromEntries(formData.entries());

  const existingUser = await User.findOne({ email });
  if (existingUser) return { error: "User Already Exists!" };

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  return { success: true, message: "User Registered Successfully! Redirecting to login..." };
}

export async function logout() {
  (await cookies()).delete("session");
  return redirect("/home");
}
