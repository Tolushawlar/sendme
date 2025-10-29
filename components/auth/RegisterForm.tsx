/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/components/Logo";
import { LoadingButton } from "../ui/loading-button";

import { SignupDto, signupFormSchema } from "@/schemas/auth";

type RegisterFormProps = {
  setPendingVerification: (value: boolean) => void;
};

export const RegisterForm = ({ setPendingVerification }: RegisterFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isLoaded, signUp } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDto>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = async (data: SignupDto) => {
    setIsLoading(true);
    if (!isLoaded) {
      return;
    }

    const { email, password, firstName, lastName } = data;

    try {
      await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (error: any) {
      console.log({ error });
      toast.error(error.errors[0].message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F5E8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">
            SendMe Logistics
          </h1> */}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create an Account
          </h1>

          <p className="text-gray-600">
            Join us today and send your package with a difference
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" {...register("firstName")} type="text" />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" {...register("lastName")} type="text" />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" {...register("email")} type="email" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input 
                id="password" 
                {...register("password")} 
                type={showPassword ? "text" : "password"} 
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="agreeTerms" {...register("agreeTerms")} />
            <label
              htmlFor="agreeTerms"
              className="text-sm text-gray-600 cursor-pointer"
            >
              I agree to the{" "}
              <Link href="/termsCondition" className="text-[#2A9D8F] hover:underline">
                Terms of Service {" "}
                and{" "} Privacy Policy
              </Link>
            </label>
          </div>
          {errors.agreeTerms && (
            <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>
          )}
          <LoadingButton isLoading={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </LoadingButton>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#2A9D8F] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
