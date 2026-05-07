import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const ALLOWED_EMAILS = [
  'nandinitak298@gmail.com',
  'badal333611@gmail.com',
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Admin Login',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'your-email@gmail.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // For local development & testing:
        // Accept either of the allowed emails with the password "admin123"
        if (!credentials?.email || !credentials?.password) return null;

        if (ALLOWED_EMAILS.includes(credentials.email) && credentials.password === 'admin123') {
          return { id: '1', name: 'Admin User', email: credentials.email };
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret-gastric-cancer-hub-2025',
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.email) {
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
};
