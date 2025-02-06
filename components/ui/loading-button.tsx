import React from "react";
import { Button } from "./button";
import { Loader2 } from "lucide-react";

type LoadingButtonProps = { isLoading: boolean; children: React.ReactNode };

export const LoadingButton = ({ isLoading, children }: LoadingButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full bg-[#E07A5F] hover:bg-[#D06A4F] text-white"
    >
      {isLoading && <Loader2 className="mr-2 animate-spin" />}
      {children}
    </Button>
  );
};
