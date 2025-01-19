import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { Modal } from "../../../components/ui/modal/modal";
import { Table } from "../../../components/ui/table/table";
import { useSelectedHotelStore } from "../../../store/selected-hotel-store";
import { Room } from "../../../types/api";
import { useRooms } from "../api/get-rooms";

export const RoomsTable = () => {
    const { selectedHotel } = useSelectedHotelStore();

    const roomsQuery = useRooms(selectedHotel.hotel_id);
    const rooms = roomsQuery.data;

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    const handleEdit = () => {
        if (selectedRoom) {
            console.log(selectedRoom);
        }
    };

    const handleDelete = () => {
        if (selectedRoom) {
            console.log(selectedRoom);
        }
    };

    if (!rooms) return null;
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
                        onClick: (room) => {
                            setSelectedRoom(room);
                            setIsEditModalOpen(true);
                        },
                    },
                    {
                        icon: <Trash2 />,
                        onClick: (room) => {
                            setSelectedRoom(room);
                            setIsDeleteModalOpen(true);
                        },
                    },
                ]}
            />
            {selectedRoom && (
                <>
                    <Modal
                        isOpen={isEditModalOpen}
                        onDismiss={() => setIsEditModalOpen(false)}
                        onAction={handleEdit}
                        actionLabel="Save"
                        title="Edit Room"
                        size="lg"
                    >
                        <div>
                            <p>Editing Room #{selectedRoom?.room_number}</p>
                        </div>
                    </Modal>

                    <Modal
                        isOpen={isDeleteModalOpen}
                        onDismiss={() => setIsDeleteModalOpen(false)}
                        onAction={handleDelete}
                        actionLabel="Delete"
                        title="Confirm Delete"
                        size="sm"
                    >
                        <p>
                            Are you sure you want to delete room #
                            {selectedRoom?.room_number}? This action cannot be
                            undone.
                        </p>
                    </Modal>
                </>
            )}
        </>
    );
};
