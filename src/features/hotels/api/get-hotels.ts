import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api-client";

export type HotelsData = {
  hotel_id: string;
  name: string;
  address: string;
};

const getHotels = (): Promise<HotelsData[]> => {
  return api.get("/hotels");
};

export const getHotelsQueryOptions = () => {
  return queryOptions({
    queryKey: ["hotels"],
    queryFn: () => getHotels(),
  });
};

export const useHotels = () => {
  return useQuery({
    ...getHotelsQueryOptions(),
  });
};
