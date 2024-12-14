import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api-client";
import { HotelsData } from "../../../types/api";

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
