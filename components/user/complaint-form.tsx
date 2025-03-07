"use client";

// import { User } from "@clerk/nextjs/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import supabase from "@/supabase";
import { Database } from "@/types/database.types";
import { complaintSchema, ComplaintDto } from "@/schemas/complaint";

export function ComplaintForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ComplaintDto>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      email: "",
      complaint: "",
    },
  });

  async function onSubmit(values: ComplaintDto) {
    setIsLoading(true);

    try {
      const insertData: Database["public"]["Tables"]["complaint"]["Insert"] = {
        email: values.email,
        complaint: values.complaint,
        created_at: new Date().toISOString(),
        // clerkId: userData.id,
      };

      const { error } = await supabase.from("complaint").insert(insertData);

      if (error) {
        throw error;
      }

      toast.success("Complaint submitted successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to submit complaint");
      console.error("Error submitting complaint:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
    <form
  onSubmit={form.handleSubmit(onSubmit)}
  className="space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
>
  <div className="flex flex-col gap-4">
    {/* Email Field */}
    <label htmlFor="email" className="text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      id="email"
      type="email"
      {...form.register("email", {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Enter a valid email address",
        },
      })}
      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
        form.formState.errors.email
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
      placeholder="Enter your email"
    />
    {form.formState.errors.email && (
      <p className="text-red-500 text-sm">
        {form.formState.errors.email.message}
      </p>
    )}

    {/* Complaint Field */}
    <label htmlFor="complaint" className="text-sm font-medium text-gray-700">
      Feedback
    </label>
    <textarea
      id="complaint"
      {...form.register("complaint", { required: "Complaint is required" })}
      rows={4}
      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
        form.formState.errors.complaint
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
      placeholder="Write your feedback here..."
    />
    {form.formState.errors.complaint && (
      <p className="text-red-500 text-sm">
        {form.formState.errors.complaint.message}
      </p>
    )}
  </div>

  {/* Submit Button */}
  <div className="flex justify-end">
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full md:w-auto px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
    >
      {isLoading && <Loader2 className="mr-2 animate-spin" />}
      {isLoading ? "Submitting..." : "Submit Feedback"}
    </Button>
  </div>
</form>

    </Form>
  );
}
