"use server";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import { prisma } from "../../prisma/prisma";
import { signupSchema } from "@/lib/zod";
import { ZodError } from "zod";

export const signupHandler = async (formData) => {
  try {
    const { name, username, email, password, confirmPassword } =
      await signupSchema.parseAsync(formData);

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        roleId: 4,
      },
    });

    if (!newUser) {
      throw new Error("Something went wrong, try again");
    }

    // Redirect to sign in after successful signup
    // redirect("/auth/signin");
    return;
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(error.errors[0].message);
      return error.errors[0].message;
    } else {
      console.error(error.message || error);
      return String(error.message || error);
    }
  }
};

export const loginHandler = async ({ username, password }) => {
  try {
    await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  } catch (error) {
    const err = error.cause;
    return String(err);
  }
};
