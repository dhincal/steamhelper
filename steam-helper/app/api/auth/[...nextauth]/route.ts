import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import SteamProvider from "next-auth-steam";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      SteamProvider(req, {
        callbackUrl: "http://localhost:3000/api/auth/callback",
        clientSecret: process.env.STEAM_SECRET as string,
      }),
      Credentials({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "your-username-here",
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "your-password-here",
          },
        },
        async authorize(credentials) {
          const user = {
            id: "1",
            name: "John Doe",
            password: "youcanneverfindout",
          };

          if (
            credentials?.username === user.name &&
            credentials?.password === user.password
          ) {
            return user;
          } else {
            return null;
          }
        },
      }),
    ],
  });
}

export { handler as GET, handler as POST };
