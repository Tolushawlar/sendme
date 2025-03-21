import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
// import LoanApplicationsTable from "@/components/admin/loan-table";
import DeliveriesApplicationTable from "@/components/admin/deliver-table";

export default function AdminLoanApplicationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Delivery Orders</h1>
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        {/* <LoanApplicationsTable /> */}
        <DeliveriesApplicationTable/>
      </Suspense>
    </div>
  );
}
