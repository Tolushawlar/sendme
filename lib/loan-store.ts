import { create } from "zustand";
import { LoanApplicationType } from "@/types/database.types";

interface LoanAppStore {
  loanApps: LoanApplicationType[];
  setLoanApps: (apps: LoanApplicationType[]) => void;
}

export const useLoanAppStore = create<LoanAppStore>((set) => ({
  loanApps: [],
  setLoanApps: (apps) => set({ loanApps: apps }),
}));
