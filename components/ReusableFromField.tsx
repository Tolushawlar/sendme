/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import DatePicker, { DatePickerProps } from "./ui/DatePicker";
import { PhoneInput } from "./PhoneInput";

interface TextInputFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export function TextInputField({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: TextInputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} min={1} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface SelectFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string; disabled?: boolean }[];
}

export function SelectField({
  control,
  name,
  label,
  placeholder,
  options,
}: SelectFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ value, label, disabled }) => (
                <SelectItem key={value} value={value} disabled={disabled}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface DatePickerFieldProps extends DatePickerProps {
  control: Control<any>;
}

export function DatePickerField({ name, control }: DatePickerFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col mt-2">
          <FormLabel>Date of birth</FormLabel>
          <FormControl>
            <DatePicker name={name} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function PhoneNumberField({
  control,
  name,
}: {
  control: Control<any>;
  name: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col items-start mt-2">
          <FormLabel className="text-left">Phone Number</FormLabel>
          <FormControl className="w-full">
            <PhoneInput placeholder="Enter a phone number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
