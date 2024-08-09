import { object, string } from "zod";

export const signinSchema = object({
  username: string({
    required_error: "Email/Username is required",
  }).min(1, "Email/Username is required"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const signupSchema = object({
  name: string({
    required_error: "name is required",
  }).min(1, "name is required"),
  username: string({
    required_error: "Email/Username is required",
  }).min(1, "Email/Username is required"),
  email: string({
    required_error: "Email is required",
  }).email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: string({ required_error: "Confirm Password is required" })
    .min(1, "Confirm Password is required")
    .min(8, "Confirm Password must be more than 8 characters")
    .max(32, "Confirm Password must be less than 32 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Comfirm Password do not match with password",
  path: ["confirmPassword"],
});
