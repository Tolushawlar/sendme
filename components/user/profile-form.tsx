"use client";

import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Loader } from "@/components/ui/Loader";

import { profileFormSchema, ProfileFormValues } from "@/schemas/user-profile";

export const ProfileForm = ({ userData }: { userData: User }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { isLoaded, user } = useUser();

  const defaultValues: Partial<ProfileFormValues> = {
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.emailAddresses[0]?.emailAddress || "",
    bio: "",
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  if (!isLoaded || !user) {
    return <Loader />;
  }

  async function onSubmit(data: ProfileFormValues) {
    const { firstName, lastName } = data;

    if (!user) return null;

    setIsLoading(true);
    try {
      await user.update({
        firstName,
        lastName,
      });

      await user.reload();

      toast.success("Your profile has been successfully updated.");
    } catch (error) {
      console.log({ error });
      toast("Something went wrong while updating your profile.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton isLoading={isLoading}>
          {isLoading ? "Updating..." : "Update Profile"}
        </LoadingButton>
      </form>
    </Form>
  );
};
