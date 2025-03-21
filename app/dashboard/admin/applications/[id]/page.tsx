/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { DetailCard, DetailRow } from "@/components/admin/details-card";
import { useDeliverStore } from "@/lib/delivery-store";
import { useLoanAppStore } from "@/lib/loan-store";
// import { KinData } from "@/types";

const DetailsPage = ({ params }: { params: { id: string } }) => {
  const loanApps = useLoanAppStore((state) => state.loanApps);
  const deliverApps = useDeliverStore((state) => state.deliveryApps);
  console.log(deliverApps);
  // const userInfo = loanApps.find((app) => app.id === params.id);
  const deliveryInfo = deliverApps.find((app) => app.id === params.id);
  console.log(deliveryInfo);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {deliveryInfo && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Delivery Application Details
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Application submitted on {formatDate(deliveryInfo.created_at)}
            </p>
          </div>

          <DetailCard title="Sender Information" className="mb-6">
            <DetailRow label="Sender Name" value={deliveryInfo.sendername} />
            <DetailRow label="Sender Phone" value={deliveryInfo.senderphonenumber} />
          </DetailCard>

          <DetailCard title="Receiver Information">
            <DetailRow label="Receiver Name" value={deliveryInfo.receivername} />
            <DetailRow label="Receiver Phone" value={deliveryInfo.receiverphonenumber} />
            <DetailRow label="Receiver Email" value={deliveryInfo.receiveremail} />
            <DetailRow label="Receiver Address" value={deliveryInfo.receiveraddress} />
            <DetailRow label="Receiver City" value={deliveryInfo.receivercity} />
            <DetailRow label="Postal Code" value={deliveryInfo.receiverpostal_code} />
          </DetailCard>

          <DetailCard title="Package Details">
            <DetailRow label="Package Weight" value={`${deliveryInfo.packageweight} kg`} />
            <DetailRow label="Number of Boxes" value={deliveryInfo.numberofboxes} />
            <DetailRow label="Declared Value" value={formatCurrency(deliveryInfo.declaredvalue)} />
            {/* <DetailRow label="Delivery Date" value={formatDate(deliveryInfo.deliverydate)} /> */}
          </DetailCard>

          <DetailCard title="Status Information">
            <DetailRow label="Application ID" value={deliveryInfo.id} />
            {/* <DetailRow label="Status" value={deliveryInfo.status} /> */}
            <DetailRow 
              label="Shipping Policy Accepted" 
              value={deliveryInfo.acceptshippingpolicy ? "Yes" : "No"} 
            />
          </DetailCard>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
