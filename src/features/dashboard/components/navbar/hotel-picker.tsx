import { ChevronDown } from "lucide-react";
import { Dropdown } from "../../../../components/ui/dropdown/dropdown";
import { Spinner } from "../../../../components/ui/spinner/spinner";
import { useSelectedHotelStore } from "../../../../store/selected-hotel-store";
import { Hotel } from "../../../../types/api";
import { selectedHotelKey } from "../../../../utils/constants";
import { setStorageItem } from "../../../../utils/localstorage";
import { useHotels } from "../../api/get-hotels";

export const HotelPicker = () => {
    const { selectedHotel, setSelectedHotel } = useSelectedHotelStore();
    const hotelsQuery = useHotels();
    const hotels = hotelsQuery.data;

    if (!hotels) return null;

    if (!selectedHotel.hotel_id) {
        setSelectedHotel(hotels[0]);
    }
    return (
        <>
            {hotelsQuery.isLoading ? (
                <Spinner />
            ) : (
                <Dropdown
                    dropdownPosition="center"
                    buttonVariant="alternative"
                    buttonClassName="flex w-44 gap-1 items-end justify-between mb-0"
                    items={hotels.map((hotel) => ({
                        label: hotel.name,
                        onClick: () => {
                            setStorageItem<Hotel>(selectedHotelKey, hotel);
                            setSelectedHotel(hotel);
                        },
                    }))}
                >
                    <span className="truncate">{selectedHotel.name}</span>
                    <ChevronDown size={18} />
                </Dropdown>
            )}
        </>
    );
};
