import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const loanFormSchema = z.object({
  // User Profile
  lastName: z.string().min(2, "Surname must be at least 2 characters"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  otherNames: z.string().optional(),
  dob: z.coerce.date().max(new Date(), "Date of birth must be in the past"),
  maidenName: z.string().optional(),
  nin: z
  .string()
  .length(11, "NIN must be exactly 11 digits")
  .regex(/^\d+$/, "NIN must contain only numbers"),
bvn: z
  .string()
  .length(11, "BVN must be exactly 11 digits")
  .regex(/^\d+$/, "BVN must contain only numbers"),
  employmentStatus: z.string(),
  employer: z.string().optional(),
  occupation: z.string().optional(),
  businessName: z.string().optional(),
  businessNature: z.string().optional(),
  idCardType: z.string(),
  gender: z.string(),
  nationality: z.string(),
  stateOfOrigin: z.string(),
  lga: z.string(),
  maritalStatus: z.string(),
  phoneNo: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  emailAddress: z.string().email(),
  residentialAddress: z.string(),
  loanType: z.string(),
  loanAmount: z.coerce.number().positive(),

  // Next of Kin
  kinTitle: z.string(),
  kinSurname: z.string().min(2, "Surname must be at least 2 characters"),
  kinFirstName: z.string().min(2, "First name must be at least 2 characters"),
  kinOtherName: z.string().optional(),
  kinDateOfBirth: z.coerce.date(),
  kinRelationship: z.string(),
  kinGender: z.string(),
  kinAddress: z.string(),
  kinEmail: z.string().email(),
  kinPhoneNumber: z.string(),
});

export type LoanAppDto = z.infer<typeof loanFormSchema>;
