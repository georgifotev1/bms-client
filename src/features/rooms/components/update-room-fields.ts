import { FormField } from "../../../components/ui/form/form";

export const updateRoomFormFields: FormField[] = [
    {
        type: "text",
        name: "room_number",
        id: "room_number",
        label: "Room Number",
        placeholder: "Enter room number",
        required: true,
        disabled: true,
    },
    {
        type: "text",
        name: "type",
        id: "type",
        label: "Room Type",
        placeholder: "Enter room type",
        required: true,
        disabled: true,
    },
    {
        type: "text",
        name: "price_per_night",
        id: "price_per_night",
        label: "Price per Night",
        placeholder: "Enter price per night",
        required: true,
    },
    {
        type: "select",
        name: "is_available",
        id: "is_available",
        label: "Availability",
        required: true,
        options: [
            { value: "true", label: "Available" },
            { value: "false", label: "Occupied" },
        ],
    },
];
