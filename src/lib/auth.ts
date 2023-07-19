import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "some.username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return { id: "1", username: "some.username" };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error",
  //   newUser: "/auth/signup",
  // },
};
