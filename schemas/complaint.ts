import { z } from "zod";

export const complaintSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  complaint: z.string(), // No min or max limits
});

export type ComplaintDto = z.infer<typeof complaintSchema>;
