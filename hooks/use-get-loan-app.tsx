import { useQuery } from "@tanstack/react-query";
import supabase from "@/supabase";
import { LoanApplicationType } from "@/types/database.types";
import { useLoanAppStore } from "@/lib/loan-store";

export const useGetLoanApps = (page: number, pageSize: number) => {
  const setLoanApps = useLoanAppStore((state) => state.setLoanApps);

  return useQuery<LoanApplicationType[]>({
    queryKey: ["loan-apps", page],
    queryFn: async () => {
      try {
        const from = (page - 1) * pageSize;
        const to = from + pageSize - 1;

        const { data, error } = await supabase
          .from("loanApplications")
          .select("*")
          .range(from, to);

        if (error) {
          throw new Error(error.message);
        }

        const loanApps = data ?? [];

        setLoanApps(loanApps);

        return loanApps;
      } catch (err) {
        console.error("Error fetching paginated loan applications:", err);
        throw err;
      }
    },
    placeholderData: (previousData) => previousData || [],
  });
};
