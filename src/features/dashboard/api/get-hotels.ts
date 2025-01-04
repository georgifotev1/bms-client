import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api-client";
import { HotelsData } from "../../../types/api";

const getHotels = (): Promise<HotelsData[]> => {
    return api.get("/hotels");
};

export const useHotels = () => {
    return useQuery({
        queryKey: ["hotels"],
        queryFn: () => getHotels(),
    });
};
