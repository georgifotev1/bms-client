import { ChevronDown } from "lucide-react";
import { Dropdown } from "../../../../components/ui/dropdown/dropdown";
import { useSelectedHotelStore } from "../../../../store/selected-hotel-store";
import { Hotel } from "../../../../types/api";
import { selectedHotelKey } from "../../../../utils/constants";
import { setStorageItem } from "../../../../utils/localstorage";

type HotelPickerPros = {
    hotels: Hotel[];
};
export const HotelPicker = (props: HotelPickerPros) => {
    const { selectedHotel, setSelectedHotel } = useSelectedHotelStore();
    return (
        <Dropdown
            dropdownPosition="center"
            buttonVariant="alternative"
            buttonClassName="flex w-44 gap-1 items-end justify-between mb-0"
            items={props.hotels.map((hotel) => ({
                label: hotel.name,
                onClick: () => {
                    setStorageItem<Hotel>(selectedHotelKey, hotel);
                    setSelectedHotel(hotel);
                },
            }))}
        >
            <span className="truncate">
                {selectedHotel?.name ?? props.hotels[0].name}
            </span>
            <ChevronDown size={18} />
        </Dropdown>
    );
};
