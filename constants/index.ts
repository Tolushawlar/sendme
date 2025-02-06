export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const maritalStatusOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "other", label: "Other" },
];

export const employmentStatusOptions = [
  { value: "employed", label: "Employed" },
  { value: "self_employed", label: "Self-Employed" },
  { value: "unemployed", label: "Unemployed" },
  { value: "student", label: "Student" },
  { value: "retired", label: "Retired" },
  { value: "other", label: "Other" },
];

export const idCardTypeOptions = [
  {
    value: "internationalPassport",
    label: "International Passport (Compulsory)",
  },
  {
    value: "votersCard",
    label: "Voters Cards (Only for sponsor)",
  },
  { value: "NIN", label: "NIN (Only for sponsor)" },
];

export const kinTitleOptions = [
  { value: "mr", label: "Mr" },
  { value: "mrs", label: "Mrs" },
  { value: "miss", label: "Miss" },
  { value: "dr", label: "Dr" },
];

export const loanTypeOptions = [
  { value: "normal", label: "Normal Loan", disabled: true },
  { value: "study", label: "Study Loan", disabled: true },
  { value: "travel", label: "Travel Loan (POF)", disabled: false },
];


export const ROUTE ={
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ADMIN_DASHBOARD: "/dashboard/admin",
  USER_DASHBOARD: "/dashboard/users"
}