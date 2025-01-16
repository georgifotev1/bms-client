import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../lib/api-client";
import { Room } from "../../../../types/api";

const getRooms = (hotelId: string): Promise<Room[]> => {
    return api.get(`/hotels/${hotelId}/rooms`);
};

export const useRooms = (hotelId: string) => {
    return useQuery({
        queryKey: ["rooms", hotelId],
        queryFn: () => getRooms(hotelId),
    });
};
