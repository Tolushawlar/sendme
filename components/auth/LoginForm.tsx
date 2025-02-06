/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LoadingButton } from "../ui/loading-button";

import { LoginFormDto, loginFormSchema } from "@/schemas/auth";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormDto>({
    resolver: zodResolver(loginFormSchema),
  });

  const { push } = useRouter();

  const onSubmit = async (data: LoginFormDto) => {
    setIsLoading(true);

    if (!isLoaded) {
      return;
    }

    const { email, password } = data;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        push("/dashboard/admin");
      }
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
      toast.error(error.errors[0].message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} type="email" />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-sm text-[#2A9D8F] hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Input id="password" {...register("password")} type="password" />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="rememberMe" {...register("rememberMe")} />
        <label
          htmlFor="rememberMe"
          className="text-sm text-gray-600 cursor-pointer"
        >
          Remember me
        </label>
      </div>

      <LoadingButton isLoading={isLoading}>
        {isLoading ? "Logging in..." : "Log In"}
      </LoadingButton>
    </form>
  );
};
