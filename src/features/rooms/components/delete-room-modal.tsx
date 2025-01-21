import { Modal } from "../../../components/ui/modal/modal";
import { Room } from "../../../types/api";

type DeleteRoomModalProps = {
    room: Room | null;
    onClose: () => void;
};

export const DeleteRoomModal = ({ room, onClose }: DeleteRoomModalProps) => {
    const handleDelete = () => {
        if (room) {
            console.log("deleted");
            onClose();
        }
    };

    return (
        <Modal
            isOpen={!!room}
            onDismiss={onClose}
            onAction={handleDelete}
            actionLabel="Delete"
            title="Confirm Delete"
            size="sm"
        >
            {room && (
                <p>
                    Are you sure you want to delete room #{room.room_number}?
                    This action cannot be undone.
                </p>
            )}
        </Modal>
    );
};
