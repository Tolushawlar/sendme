import { z } from "zod";

export const signupFormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    agreeTerms: z.coerce
      .boolean()
      .refine((val) => val === true, "You must agree to the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupDto = z.infer<typeof signupFormSchema>;

export const emailVerificationSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export type EmailVerificationDto = z.infer<typeof emailVerificationSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
  rememberMe: z.coerce.boolean(),
});

export type LoginFormDto = z.infer<typeof loginFormSchema>;
