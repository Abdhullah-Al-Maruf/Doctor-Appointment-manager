import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Allow access to /all-appointments list page
  if (pathname === '/all-appointments') {
    return NextResponse.next();
  }

  // Protect individual appointment pages and dashboard
  const session = await auth.api.getSession({
    headers: request.headers
  });

  if (!session) {
    const loginUrl = new URL("/signin", request.url);

    // Save where the user wanted to go
    loginUrl.searchParams.set("callbackUrl", request.url);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/all-appointments/:path*', '/dashboard/:path*'],
};