import NextAuth, { DefaultSession, Session, User } from 'next-auth';
import { AdapterSession, AdapterUser } from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';
import { signIn as signInAccount } from './services/account-service';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      account: {
        id: string;
        email: string;
        email_verified_at: string;
        created_at: string;
        updated_at: string;
      };
      token: string;
    } & DefaultSession['user'];
    token: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await signInAccount({
          email: credentials.email as string,
          password: credentials.password as string,
        });
        if (response.ok) {
          const user = await response.json();
          return user;
        } else {
          throw new Error('Invalid Credentials');
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      user && (token.user = user);
      if (trigger === 'update') {
        return session;
      }
      return token;
    },
    session({ session, token }) {
      session.user = token.user as AdapterUser & {
        account: {
          id: string;
          email: string;
          email_verified_at: string;
          created_at: string;
          updated_at: string;
        };
        token: string;
      } & User;
      return session;
    },
  },
});
