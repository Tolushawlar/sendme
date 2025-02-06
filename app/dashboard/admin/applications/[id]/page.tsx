"use client";

import { DetailCard, DetailRow } from "@/components/admin/details-card";
import { useLoanAppStore } from "@/lib/loan-store";
import { KinData } from "@/types";

const DetailsPage = ({ params }: { params: { id: string } }) => {
  const loanApps = useLoanAppStore((state) => state.loanApps);

  const userInfo = loanApps.find((app) => app.id === params.id);

  const nextOfKin = userInfo?.nextOfKin
    ? (userInfo.nextOfKin as KinData)
    : null;

  console.log(JSON.stringify(userInfo, null, 2));

  console.log(JSON.stringify(loanApps, null, 2));

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
      {userInfo && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Loan Application Details
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Application submitted on {formatDate(userInfo.createdAt)}
            </p>
          </div>

          <DetailCard title="Loan Information" className="mb-6">
            <DetailRow label="Loan Type" value={userInfo.loanType} />
            <DetailRow
              label="Loan Amount"
              value={formatCurrency(userInfo.loanAmount)}
            />
            <DetailRow label="Application ID" value={userInfo.id} />
          </DetailCard>

          <DetailCard title="Personal Information">
            <DetailRow
              label="Full Name"
              value={`${userInfo.firstName} ${userInfo.otherNames || ""} ${
                userInfo.lastName
              }`}
            />
            <DetailRow label="Date of Birth" value={formatDate(userInfo.dob)} />
            <DetailRow label="Gender" value={userInfo.gender} />
            <DetailRow label="Marital Status" value={userInfo.maritalStatus} />
            <DetailRow label="Nationality" value={userInfo.nationality} />
            <DetailRow label="State of Origin" value={userInfo.stateOfOrigin} />
            <DetailRow label="LGA" value={userInfo.lga} />
          </DetailCard>

          <DetailCard title="Contact Information">
            <DetailRow label="Email Address" value={userInfo.emailAddress} />
            <DetailRow label="Phone Number" value={userInfo.phoneNo} />
            <DetailRow
              label="Residential Address"
              value={userInfo.residentialAddress}
            />
          </DetailCard>

          <DetailCard title="Employment Details">
            <DetailRow
              label="Employment Status"
              value={userInfo.employmentStatus}
            />

            {userInfo.employmentStatus === "employed" && (
              <>
                <DetailRow label="Employer" value={userInfo.employer} />
                <DetailRow label="Occupation" value={userInfo.occupation} />
              </>
            )}

            {userInfo.businessName && (
              <>
                <DetailRow
                  label="Business Name"
                  value={userInfo.businessName}
                />
                <DetailRow
                  label="Business Nature"
                  value={userInfo.businessNature}
                />
              </>
            )}
          </DetailCard>

          <DetailCard title="Identification">
            <DetailRow label="BVN" value={userInfo.bvn} />
            <DetailRow label="NIN" value={userInfo.nin} />
            <DetailRow label="ID Card Type" value={userInfo.idCardType} />
          </DetailCard>

          {nextOfKin && (
            <DetailCard title="Next of Kin">
              <DetailRow label="Title" value={nextOfKin.kinTitle} />

              <DetailRow
                label="Name"
                value={`${nextOfKin.kinFirstName} ${nextOfKin.kinSurname} ${nextOfKin.kinOtherName}`}
              />

              <DetailRow label="Email" value={nextOfKin.kinEmail} />

              <DetailRow label="Phone" value={nextOfKin.kinPhoneNumber} />

              <DetailRow label="Address" value={nextOfKin.kinAddress} />

              <DetailRow
                label="Relationship"
                value={nextOfKin.kinRelationship}
              />

              <DetailRow
                label="DOB"
                value={formatDate(nextOfKin.kinDateOfBirth as string)}
              />

              <DetailRow label="Gender" value={nextOfKin.kinGender} />
            </DetailCard>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
