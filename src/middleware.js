import { NextResponse } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname
  console.log(path);
  const isPublicPath = path === "/login" || path === "/signup"
  const response = NextResponse.json({})
  const token = response.cookies.get("token")?.value || ""
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl))
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
}
