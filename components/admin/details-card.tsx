import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DetailCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const DetailCard = ({
  title,
  children,
  className = "",
}: DetailCardProps) => {
  return (
    <div
      className={`bg-card p-6 rounded-lg shadow-sm animate-fade-up ${className}`}
    >
      <h2 className="text-xl font-semibold mb-4 text-primary">{title}</h2>
      {children}
    </div>
  );
};

export const DetailRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number | null;
}) => {
  return (
    <div className="flex flex-col sm:flex-row py-2 border-b last:border-0">
      <span className="text-sm font-medium text-gray-500 sm:w-1/3">
        {label}
      </span>
      <span
        className={cn(
          "text-sm text-gray-900 sm:w-2/3",
          value?.toString().includes("@") ? "lowercase" : "capitalize"
        )}
      >
        {value || "N/A"}
      </span>
    </div>
  );
};
