import { User } from "@clerk/nextjs/server";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function calculateUserStats(users:User[], currentDate = new Date()) {
  // Define date ranges
  const thirtyDaysAgo = new Date(currentDate);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const sixtyDaysAgo = new Date(currentDate);
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  // Group users based on creation date
  const last30DaysUsers = users.filter((user) => {
    const createdAt = new Date(user.createdAt);
    return createdAt >= thirtyDaysAgo && createdAt < currentDate;
  });

  const previous30DaysUsers = users.filter((user) => {
    const createdAt = new Date(user.createdAt);
    return createdAt >= sixtyDaysAgo && createdAt < thirtyDaysAgo;
  });

  // Calculate percentage increases
  const signupIncrease =
    previous30DaysUsers.length > 0
      ? (
          ((last30DaysUsers.length - previous30DaysUsers.length) /
            previous30DaysUsers.length) *
          100
        ).toFixed(1)
      : last30DaysUsers.length > 0
      ? "100.0" // Default to 100% if no previous data but new signups exist
      : "0.0";

  const totalIncrease =
    previous30DaysUsers.length > 0
      ? (
          ((last30DaysUsers.length + previous30DaysUsers.length) /
            previous30DaysUsers.length -
            1) *
          100
        ).toFixed(1)
      : last30DaysUsers.length > 0
      ? "100.0" // Default to 100% if no previous data but new signups exist
      : "0.0";

  return {
    totalUsers: users.length,
    newSignUps: last30DaysUsers.length,
    totalIncrease,
    signupIncrease,
  };
}
