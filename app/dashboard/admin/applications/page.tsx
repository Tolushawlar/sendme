import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import LoanApplicationsTable from "@/components/admin/loan-table";
import DeliveriesApplicationTable from "@/components/admin/deliver-table";
import ExportDeclarationsPage from "@/app/dashboard/admin/export-declarations/page";

export default function AdminLoanApplicationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Applications</h1>
      <Tabs defaultValue="deliveries" className="w-full">
        <TabsList>
          <TabsTrigger value="deliveries">Delivery Orders</TabsTrigger>
          <TabsTrigger value="exports">Export Declarations</TabsTrigger>
        </TabsList>
        <TabsContent value="deliveries">
          <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
            <DeliveriesApplicationTable/>
          </Suspense>
        </TabsContent>
        <TabsContent value="exports">
          <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
            <ExportDeclarationsPage/>
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}
