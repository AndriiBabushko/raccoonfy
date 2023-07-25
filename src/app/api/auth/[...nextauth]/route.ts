import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "some_username@something.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma?.user.findUnique({
          where: {
            email: credentials?.email,
          },
          include: {
            likedTracks: true,
            albums: true,
            comments: true,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: String(user.id),
          name: user.name,
          surname: user.surname,
          email: user.email,
          avatar: user.avatar,
          likedTracks: user.likedTracks,
          albums: user.albums,
          comments: user.comments,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    newUser: "/auth/signup",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
