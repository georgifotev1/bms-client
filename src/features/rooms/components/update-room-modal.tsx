import { Form } from "../../../components/ui/form/form";
import { populateFormDefaults } from "../../../components/ui/form/populate-form-defaults";
import { Modal } from "../../../components/ui/modal/modal";
import { Room } from "../../../types/api";
import { updateRoomSchema, useUpdateRoom } from "../api/update-room";
import { updateRoomFormFields } from "./update-room-fields";

type EditRoomModalProps = {
    room: Room | null;
    onClose: () => void;
};

export const EditRoomModal = ({ room, onClose }: EditRoomModalProps) => {
    const updateRoom = useUpdateRoom();

    const handleEdit = (data: any) => {
        if (room) {
            console.log(room);
            updateRoom.mutate(
                {
                    hotelId: room.hotel_id,
                    roomId: room.room_id,
                    data: {
                        price_per_night: data.price_per_night,
                        is_available: data.is_available,
                    },
                },
                {
                    onSuccess: onClose,
                },
            );
        }
    };

    return (
        <Modal
            isOpen={!!room}
            onDismiss={onClose}
            actionLabel="Save"
            title="Edit Room"
            size="lg"
        >
            {room && (
                <Form
                    fields={populateFormDefaults(room, updateRoomFormFields)}
                    onFormSubmit={handleEdit}
                    schema={updateRoomSchema}
                    isLoading={updateRoom.isPending}
                    apiError={updateRoom.error?.message ?? ""}
                    submitButtonText="Update Room"
                />
            )}
        </Modal>
    );
};
