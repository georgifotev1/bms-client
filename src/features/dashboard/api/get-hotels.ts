import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api-client";
import { Hotel } from "../../../types/api";

const getHotels = (): Promise<Hotel[]> => {
    return api.get("/hotels");
};

export const useHotels = () => {
    return useQuery({
        queryKey: ["hotels"],
        queryFn: () => getHotels(),
    });
};
