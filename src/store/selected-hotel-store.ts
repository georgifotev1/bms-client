import { create } from "zustand";
import { Hotel } from "../types/api";
import { getStorageItem } from "../utils/localstorage";
import { selectedHotelKey } from "../utils/constants";

type SelectedHotelStore = {
    selectedHotel: Hotel;
    setSelectedHotel: (hotel: Hotel) => void;
};

const defaultSelectedHotel: Hotel = {
    hotel_id: "",
    name: "",
    address: "",
};
export const useSelectedHotelStore = create<SelectedHotelStore>((set) => ({
    selectedHotel:
        getStorageItem<Hotel>(selectedHotelKey) ?? defaultSelectedHotel,
    setSelectedHotel: (hotel) =>
        set(() => ({
            selectedHotel: hotel,
        })),
}));
