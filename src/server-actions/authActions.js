"use server"

import { signIn } from "@/auth";

export const signinHandler = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
    });
}