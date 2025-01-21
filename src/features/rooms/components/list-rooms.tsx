import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { Table } from "../../../components/ui/table/table";
import { Room } from "../../../types/api";
import { DeleteRoomModal } from "./delete-room-modal";
import { EditRoomModal } from "./update-room-modal";

type RoomsTableProps = {
    rooms: Room[];
};
export const RoomsTable = ({ rooms }: RoomsTableProps) => {
    const [editRoom, setEditRoom] = useState<Room | null>(null);
    const [deleteRoom, setDeleteRoom] = useState<Room | null>(null);

    return (
        <>
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
                                <span className="text-green-500">
                                    Available
                                </span>
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
                actions={[
                    {
                        icon: <Edit />,
                        onClick: setEditRoom,
                    },
                    {
                        icon: <Trash2 />,
                        onClick: setDeleteRoom,
                    },
                ]}
            />

            <EditRoomModal room={editRoom} onClose={() => setEditRoom(null)} />

            <DeleteRoomModal
                room={deleteRoom}
                onClose={() => setDeleteRoom(null)}
            />
        </>
    );
};
