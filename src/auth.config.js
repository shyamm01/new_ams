import { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { signinSchema } from "./lib/zod";
import { ZodError } from "zod";
import { prisma } from "../prisma/prisma";

export default {
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "User Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = await signinSchema.parseAsync(
            credentials
          );

          // if (!username || !password) {
          //   return;
          // }

          const user = await prisma.user.findFirst({
            where: {
              OR: [{ email: username }, { username: username }],
            },
          });
          console.log(user);
          if (!user || !user.password) {
            throw new CredentialsSignin({
              cause: "Invalid email or password.",
            });
          }

          const isMatch = await compare(password, user.password);

          if (!isMatch) {
            throw new CredentialsSignin({
              cause: "Invalid email or password.",
            });
          }

          return { ...user, password: undefined };
        } catch (error) {
          console.log(error instanceof ZodError);

          if (error instanceof ZodError) {
            // Throw a custom error with the Zod validation error message
            // throw new Error(error.errors[0].message);
            throw new CredentialsSignin({
              cause: error.errors[0].message,
            });
            // Only show the first Zod error message
          } else {
            throw error;
          }
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Attach additional fields to the session object
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.subscriptionId = token.subscriptionId; // Add any custom field you need
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // Attach the full user object to the token
        token.id = user.id;
        token.username = user.username;
        token.subscriptionId = user.subscriptionId; // Add any custom field you need
      }
      return token;
    },
  },
};
