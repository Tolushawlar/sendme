import { clerkClient, currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { UserTable } from "@/components/admin/user-table";
import { StatsCard } from "@/components/admin/StatsCard";

import { checkRole } from "@/utils/roles";
import { calculateUserStats } from "@/lib/utils";

export default async function AdminDashboard() {
  if (!checkRole("superAdmin") && !checkRole("admin")) {
    console.log(checkRole);
    redirect("/");
  }

  let currentUserInfo: User | null;
  let regularUsers: User[] = [];

  try {
    // Get the currently logged-in user's ID
    currentUserInfo = await currentUser();

    // If currentUser is null, redirect to login
    if (!currentUserInfo) {
      redirect("/login");
    }
    const currentUserId = currentUserInfo?.id;

    const client = await clerkClient();

    const { data } = await client.users.getUserList({
      orderBy: "-created_at",
    });

    // Filter out admin users and the current user
    regularUsers = data.filter((user) => {
      const userRole = user.privateMetadata.role;
      return (!userRole || userRole === "user") && user.id !== currentUserId;
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Optionally redirect or render fallback content
    redirect("/error");
  }

  // Calculate user stats
  const statsData = calculateUserStats(regularUsers);

  const plainData = JSON.parse(JSON.stringify(regularUsers));

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
      <StatsCard stats={statsData} />
      <UserTable data={plainData ?? []} />
    </main>
  );
}
