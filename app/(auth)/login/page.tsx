"use client";

import Link from "next/link";

import { Logo } from "@/components/Logo";
import { useSignIn } from "@clerk/nextjs";
import { Loader } from "@/components/ui/Loader";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  const { isLoaded } = useSignIn();

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#F9F5E8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Log in to your account</p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#2A9D8F] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
