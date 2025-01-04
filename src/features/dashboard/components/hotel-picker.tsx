import { ChevronDown } from "lucide-react";
import { Dropdown } from "../../../components/ui/dropdown/dropdown";
import { Spinner } from "../../../components/ui/spinner/spinner";
import { useHotels } from "../api/get-hotels";

export const HotelPicker = () => {
    const hotelsQuery = useHotels();

    if (hotelsQuery.isLoading) return <Spinner />;

    const hotels = hotelsQuery.data;

    if (!hotels) return null;

    return (
        <div>
            <Dropdown
                dropdownPosition="center"
                buttonVariant="alternative"
                buttonClassName="flex w-44 gap-1 items-end justify-between"
                items={hotels.map((hotel) => ({
                    label: hotel.name,
                    onClick: () => {
                        console.log(hotel.name);
                    },
                }))}
            >
                <span className="truncate">{hotels[0].name}</span>
                <ChevronDown size={18} />
            </Dropdown>
        </div>
    );
};
