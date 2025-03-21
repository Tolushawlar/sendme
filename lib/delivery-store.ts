import { create } from "zustand";
import { DeliveryApplicationType } from "@/types/database.types";

interface DeliverStore {
  deliveryApps: DeliveryApplicationType[];
  setDeliveryApps: (apps: DeliveryApplicationType[]) => void;
}

export const useDeliverStore = create<DeliverStore>((set) => ({
  deliveryApps: [],
  setDeliveryApps: (apps) => set({ deliveryApps: apps }),
}));
