/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";

import { Loader } from "@/components/ui/Loader";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { EmailVerificationForm } from "@/components/auth/EmailVerification";

export default function RegistrationPage() {
  const { isLoaded } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);

  if (!isLoaded) {
    return <Loader />;
  }

  return pendingVerification ? (
    <EmailVerificationForm />
  ) : (
    <RegisterForm setPendingVerification={setPendingVerification} />
  );
}
