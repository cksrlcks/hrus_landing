import { useQuery } from "@tanstack/react-query";
import { MOCK_DATA, PricingData } from "@/components/pricing/type";

export const usePricingQuery = () => {
  return useQuery<PricingData>({
    queryKey: ["pricing"],
    queryFn: async () => {
      return MOCK_DATA;
    },
  });
};
