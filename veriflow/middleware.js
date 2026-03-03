import { NextResponse } from "next/server";
import decrypt from './app/libs/utils/auth'

export async function middleware(request) {
  const session = request.cookies.get("session")?.value;
  const path = request.nextUrl.pathname;

  const isProtectedRoute = path.startsWith("/dashboard") || path.startsWith("/verify");
  const isPublicRoute = ["/login", "/signup", "/home"].includes(path);

  let payload = null;
  if (session) {
    try {
      payload = await decrypt(session);
    } catch (error) {
      console.error("Middleware Auth Error:", error.message);
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("session");
      return response;
    }
  }

  // 3. Redirect logic
  if (isProtectedRoute && !payload) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPublicRoute && payload && path !== "/home") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};