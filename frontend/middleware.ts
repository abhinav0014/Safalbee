/* generate code for middleware with default expprt */
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Example: read a cookie
    const isLoggedIn = request.cookies.get("auth")?.value

      // Protect a route
        if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/login", request.url))
              }

                // Allow request to continue
                  return NextResponse.next()
                  }