import { z } from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  lastName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z
    .string()
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    })
    .optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
