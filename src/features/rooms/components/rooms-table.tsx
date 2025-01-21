import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { Form } from "../../../components/ui/form/form";
import { populateFormDefaults } from "../../../components/ui/form/populate-form-defaults";
import { Modal } from "../../../components/ui/modal/modal";
import { Table } from "../../../components/ui/table/table";
import { Room } from "../../../types/api";
import { updateRoomSchema, useUpdateRoom } from "../api/update-room";
import { updateRoomFormFields } from "./update-room-fields";

type RoomsTableProps = {
    rooms: Room[];
};
export const RoomsTable = ({ rooms }: RoomsTableProps) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    const updateRoom = useUpdateRoom();

    const handleEdit = (data: any) => {
        if (selectedRoom) {
            updateRoom.mutate(
                {
                    hotelId: selectedRoom.hotel_id,
                    roomId: selectedRoom.room_id,
                    data: {
                        price_per_night: data.price_per_night,
                        is_available: data.is_available === "true",
                    },
                },
                {
                    onSuccess: () => {
                        setIsEditModalOpen(false);
                    },
                },
            );
        }
    };

    const handleDelete = () => {
        if (selectedRoom) {
            console.log("deleted");
        }
    };

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
                        actionLabel="Save"
                        title="Edit Room"
                        size="lg"
                    >
                        <Form
                            fields={populateFormDefaults(
                                selectedRoom,
                                updateRoomFormFields,
                            )}
                            onFormSubmit={handleEdit}
                            schema={updateRoomSchema}
                            isLoading={updateRoom.isPending}
                            apiError={updateRoom.error?.message ?? ""}
                            submitButtonText="Update Room"
                        />
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
