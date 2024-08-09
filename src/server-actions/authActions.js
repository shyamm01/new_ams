"use server";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
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
    console.log(user);

    if (user) {
      throw "Email already exists";
    }
    // ... create user
    const hashedPassword = await hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });
    if (!newUser) {
      throw "Something went wrong, try again";
    }
    redirect("/auth/signin");
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error.errors[0].message);
      return error.errors[0].message;
    } else {
      return error;
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
    return err;
  }
};
