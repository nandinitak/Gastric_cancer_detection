import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { ALLOWED_EMAILS } from '@/lib/authConfig';

export default withAuth(
  function middleware(req) {
    const email = req.nextauth.token?.email ?? '';
    // Double-check email is in whitelist even if signed in
    if (!ALLOWED_EMAILS.includes(email)) {
      return NextResponse.redirect(new URL('/admin/login?error=AccessDenied', req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/admin/login',
    },
  }
);

// Only protect the admin routes (not login page)
export const config = {
  matcher: ['/admin', '/admin/((?!login).*)'],
};
