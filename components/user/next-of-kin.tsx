import { Control } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DatePickerField,
  PhoneNumberField,
  SelectField,
  TextInputField,
} from "@/components/ReusableFromField";

import { LoanAppDto } from "@/schemas/loan";
import { genderOptions, kinTitleOptions } from "@/constants";

export function NextOfKinSection({
  control,
}: {
  control: Control<LoanAppDto>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Next of Kin Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <SelectField
          control={control}
          name="kinTitle"
          label="Title"
          options={kinTitleOptions}
          placeholder="Select title"
        />
        <TextInputField control={control} name="kinSurname" label="Surname" />
        <TextInputField
          control={control}
          name="kinFirstName"
          label="First Name"
        />
        <TextInputField
          control={control}
          name="kinOtherName"
          label="Other Name"
        />
        <TextInputField control={control} name="kinAddress" label="Address" />

        <PhoneNumberField control={control} name="kinPhoneNumber" />
        
        <TextInputField
          control={control}
          name="kinEmail"
          label="Email"
          type="email"
        />
        
        <TextInputField
          control={control}
          name="kinRelationship"
          label="Relationship"
        />
        
        <DatePickerField control={control} name="kinDateOfBirth" />
        
        <SelectField
          control={control}
          name="kinGender"
          label="Gender"
          options={genderOptions}
          placeholder="Select gender"
        />
      </CardContent>
    </Card>
  );
}
