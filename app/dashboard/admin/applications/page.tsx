import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import LoanApplicationsTable from "@/components/admin/loan-table";

export default function AdminLoanApplicationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Loan Applications</h1>
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <LoanApplicationsTable />
      </Suspense>
    </div>
  );
}
