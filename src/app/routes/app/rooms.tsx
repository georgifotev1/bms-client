import { useRooms } from "../../../features/rooms/api/get-rooms";
import { RoomsTable } from "../../../features/rooms/components/rooms-table";
import { useSelectedHotelStore } from "../../../store/selected-hotel-store";

export const RoomsRoute = () => {
    const { selectedHotel } = useSelectedHotelStore();

    const roomsQuery = useRooms(selectedHotel.hotel_id);
    const rooms = roomsQuery.data;

    if (!rooms) return null;
    return (
        <>
            <RoomsTable rooms={rooms} />
        </>
    );
};
