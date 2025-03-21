import { auth } from "@clerk/nextjs/server";
import { Roles } from "@/types/globals";

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth();
  console.log(sessionClaims);
  return sessionClaims?.metadata.role === role;
};
  