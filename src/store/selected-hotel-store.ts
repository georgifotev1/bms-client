import { create } from "zustand";
import { Hotel } from "../types/api";
import { getStorageItem } from "../utils/localstorage";
import { selectedHotelKey } from "../utils/constants";
import { devtools } from "zustand/middleware";

type SelectedHotelStore = {
    selectedHotel: Hotel;
    setSelectedHotel: (hotel: Hotel) => void;
};

const defaultSelectedHotel: Hotel = {
    hotel_id: "",
    name: "",
    address: "",
};
export const useSelectedHotelStore = create<
    SelectedHotelStore,
    [["zustand/devtools", never]]
>(
    devtools((set) => ({
        selectedHotel:
            getStorageItem<Hotel>(selectedHotelKey) ?? defaultSelectedHotel,
        setSelectedHotel: (hotel: Hotel) =>
            set(() => ({
                selectedHotel: hotel,
            })),
    })),
);
