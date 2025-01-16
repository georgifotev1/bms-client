import { Table } from "../../../../components/ui/table/table";
import { useSelectedHotelStore } from "../../../../store/selected-hotel-store";
import { useRooms } from "../api/get-rooms";

export const RoomsTable = () => {
    const { selectedHotel } = useSelectedHotelStore();

    const roomsQuery = useRooms(selectedHotel.hotel_id);
    const rooms = roomsQuery.data;

    if (!rooms) return null;
    return (
        <Table
            columns={{
                room_number: {
                    name: "№",
                    accessor: (room) => room.room_number,
                    small: true,
                },
                type: {
                    name: "Room Type",
                    accessor: (room) => room.type,
                },
                status: {
                    name: "Status",
                    accessor: (room) =>
                        room.is_available ? (
                            <span className="text-green-500">Available</span>
                        ) : (
                            <span className="text-red-500">Occupied</span>
                        ),
                },
                price: {
                    name: "Price",
                    accessor: (room) => `$${room.price_per_night}`,
                },
            }}
            data={rooms}
        />
    );
};
