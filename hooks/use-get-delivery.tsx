import { useQuery } from "@tanstack/react-query";
import supabase from "@/supabase";
import { DeliveryApplicationType } from "@/types/database.types";
import { useDeliverStore } from "@/lib/delivery-store";

export const useGetDeliveryApps = (page: number, pageSize: number) => {
  const setDeliveryApps = useDeliverStore((state) => state.setDeliveryApps);

  return useQuery<DeliveryApplicationType[]>({
    queryKey: ["delivery-apps", page],
    queryFn: async () => {
      try {
        const from = (page - 1) * pageSize;
        const to = from + pageSize - 1;

        const { data, error } = await supabase
          .from("deliveryapplications")
          .select("*")
          .range(from, to);

        if (error) {
          throw new Error(error.message);
        }

        const deliveryApps = data ?? [];

        setDeliveryApps(deliveryApps);

        return deliveryApps;
      } catch (err) {
        console.error("Error fetching paginated delivery applications:", err);
        throw err;
      }
    },
    placeholderData: (previousData) => previousData || [],
  });
};
