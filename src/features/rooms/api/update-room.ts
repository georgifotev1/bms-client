import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../lib/api-client";
import { z } from "zod";

export const updateRoomSchema = z.object({
    price_per_night: z.coerce.number().min(1, "This field is required"),
    is_available: z.coerce.boolean(),
});

export type UpdateRoomInput = z.infer<typeof updateRoomSchema>;

const updateRoom = (
    hotelId: string,
    roomId: string,
    data: UpdateRoomInput,
): Promise<any> => {
    return api.put(`/hotels/${hotelId}/rooms/${roomId}`, data);
};

export const useUpdateRoom = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            hotelId,
            roomId,
            data,
        }: {
            hotelId: string;
            roomId: string;
            data: UpdateRoomInput;
        }) => updateRoom(hotelId, roomId, data),
        onSuccess: (data) => {
            queryClient.setQueryData(["rooms"], data);
            queryClient.invalidateQueries({ queryKey: ["rooms"] });
        },
    });
};
