"use client";

import { User } from "@clerk/nextjs/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { PersonalInfoSection } from "./personal-info";
import { NextOfKinSection } from "./next-of-kin";

import { LoanAppDto, loanFormSchema } from "@/schemas/loan";
import supabase from "@/supabase";
import { Database } from "@/types/database.types";

export function LoanApplicationForm({ userData }: { userData: User }) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoanAppDto>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      otherNames: "",
      maidenName: "",
      emailAddress: userData?.emailAddresses[0]?.emailAddress || "",
      phoneNo: userData?.phoneNumbers[0]?.phoneNumber || "",
      dob: new Date(),
      residentialAddress: "",
      bvn: "",
      nin: "",
      employmentStatus: "",
      employer: "",
      occupation: "",
      businessName: "",
      businessNature: "",
      idCardType: "",
      gender: "",
      nationality: "",
      stateOfOrigin: "",
      lga: "",
      maritalStatus: "",
      loanType: "",
      loanAmount: 0,

      // Next of Kin
      kinTitle: "",
      kinSurname: "",
      kinFirstName: "",
      kinOtherName: "",
      kinAddress: "",
      kinEmail: "",
      kinPhoneNumber: "",
      kinDateOfBirth: new Date(),
      kinRelationship: "",
      kinGender: "",
    },
  });

  async function onSubmit(values: LoanAppDto) {
    setIsLoading(true);

    try {
      // Prepare the data for insertion
      const insertData: Database["public"]["Tables"]["loanApplications"]["Insert"] =
        {
          firstName: values.firstName,
          lastName: values.lastName,
          otherNames: values.otherNames,
          maidenName: values.maidenName,
          emailAddress: values.emailAddress,
          phoneNo: values.phoneNo,
          dob: values.dob.toISOString(),
          residentialAddress: values.residentialAddress,
          bvn: values.bvn,
          nin: values.nin,
          employmentStatus:
            values.employmentStatus as Database["public"]["Enums"]["employment_status"],
          employer: values.employer,
          occupation: values.occupation,
          businessName: values.businessName,
          businessNature: values.businessNature,
          idCardType: values.idCardType,
          gender: values.gender as Database["public"]["Enums"]["gender_enum"],
          nationality: values.nationality,
          stateOfOrigin: values.stateOfOrigin,
          lga: values.lga,
          maritalStatus:
            values.maritalStatus as Database["public"]["Enums"]["marital_status"],
          loanType: values.loanType as Database["public"]["Enums"]["loan_type"],
          loanAmount: values.loanAmount,
          nextOfKin: {
            kinTitle: values.kinTitle,
            kinSurname: values.kinSurname,
            kinFirstName: values.kinFirstName,
            kinOtherName: values.kinOtherName,
            kinAddress: values.kinAddress,
            kinEmail: values.kinEmail,
            kinPhoneNumber: values.kinPhoneNumber,
            kinDateOfBirth: values.kinDateOfBirth.toISOString(),
            kinRelationship: values.kinRelationship,
            kinGender: values.kinGender,
          },
          clerkId: userData.id,
        };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from("loanApplications")
        .insert(insertData);

      if (error) {
        throw error;
      }

      // Notify success
      toast.success("Application Submitted");
      console.log("Inserted Data:", JSON.stringify(data, null, 2));
      form.reset();
    } catch (error) {
      toast.error("Submission failed");
      console.error(
        "Error submitting application:",
        JSON.stringify(error, null, 2)
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <PersonalInfoSection form={form} />

        <NextOfKinSection control={form.control} />

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto"
          >
            {isLoading && <Loader2 className="mr-2 animate-spin" />}
            {isLoading ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
