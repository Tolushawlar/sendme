import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DatePickerField,
  PhoneNumberField,
  SelectField,
  TextInputField,
} from "@/components/ReusableFromField";
import { UseFormReturn } from "react-hook-form";
import {
  employmentStatusOptions,
  genderOptions,
  idCardTypeOptions,
  loanTypeOptions,
  maritalStatusOptions,
} from "@/constants";
import { LoanAppDto } from "@/schemas/loan";

export function PersonalInfoSection({
  form,
}: {
  form: UseFormReturn<LoanAppDto>;
}) {
  const { control, watch } = form;

  const employmentStatus = watch("employmentStatus");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <TextInputField control={control} name="lastName" label="Surname" />

        <TextInputField control={control} name="firstName" label="First Name" />
        <TextInputField
          control={control}
          name="otherNames"
          label="Other Name"
        />

        <TextInputField
          control={control}
          name="maidenName"
          label="Maiden Name"
        />

        <TextInputField
          control={control}
          name="emailAddress"
          label="Email Address"
          type="email"
        />

        <TextInputField
          control={control}
          name="residentialAddress"
          label="Residential Address"
        />

        <SelectField
          control={control}
          name="gender"
          label="Gender"
          placeholder="Select gender"
          options={genderOptions}
        />

        <DatePickerField control={control} name="dob" />

        <TextInputField control={control} name="bvn" label="BVN" />

        <TextInputField control={control} name="nin" label="NIN" />

        <SelectField
          control={control}
          name="employmentStatus"
          label="Employment Status"
          placeholder="Select employment status"
          options={employmentStatusOptions}
        />

        {employmentStatus === "employed" && (
          <>
            <TextInputField
              control={control}
              name="employer"
              label="Employer"
            />
            <TextInputField
              control={control}
              name="occupation"
              label="Occupation"
            />
          </>
        )}

        {/* Conditionally render "Business Name" and "Nature of Business" */}
        {employmentStatus === "self_employed" && (
          <>
            <TextInputField
              control={control}
              name="businessName"
              label="Business Name"
            />
            <TextInputField
              control={control}
              name="businessNature"
              label="Nature of Business"
            />
          </>
        )}

        <SelectField
          control={control}
          name="idCardType"
          label="ID Card Type"
          options={idCardTypeOptions}
          placeholder="Select ID Card Type"
        />
        <TextInputField
          control={control}
          name="nationality"
          label="Nationality"
        />
        <TextInputField
          control={control}
          name="stateOfOrigin"
          label="State of Origin"
        />
        <TextInputField control={control} name="lga" label="LGA" />

        <SelectField
          control={control}
          name="maritalStatus"
          label="Marital Status"
          options={maritalStatusOptions}
          placeholder="Select marital status"
        />

        <PhoneNumberField control={control} name="phoneNo" />

        <SelectField
          control={control}
          name="loanType"
          label="Loan Type"
          placeholder="Select loan type"
          options={loanTypeOptions}
        />

        <TextInputField
          control={control}
          name="loanAmount"
          label="Loan Amount"
          placeholder="Enter loan amount"
          type="number"
        />
      </CardContent>
    </Card>
  );
}
