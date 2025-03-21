import * as z from "zod";

export const deliveryFormSchema = z.object({
  senderName: z.string().min(2, "Name must be at least 2 characters"),
  senderPhoneNumber: z.string().min(10, "Please enter a valid phone number"),
  receiverName: z.string().min(2, "Name must be at least 2 characters"),
  receiverPhoneNumber: z.string().min(10, "Please enter a valid phone number"),
  receiverEmail: z.string().email("Please enter a valid email"),
  receiverAddress: z.string().min(5, "Please enter a valid address"),
  receiverCity: z.string().min(2, "Please enter a valid city"),
  receiverPostalCode: z.string().min(4, "Please enter a valid postal code"),
  packageWeight: z.number().positive("Weight must be greater than 0"),
  numberOfBoxes: z
    .number()
    .int()
    .positive("Number of boxes must be greater than 0"),
  declaredValue: z.number().positive("Declared value must be greater than 0"),
  deliveryDate: z.date(),
  acceptShippingPolicy: z.boolean().refine((value) => value === true, {
    message: "You must accept the shipping policy to continue",
  }),
});
