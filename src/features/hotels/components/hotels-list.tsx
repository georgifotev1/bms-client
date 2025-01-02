import { Link } from "../../../components/ui/link/link";
import { Spinner } from "../../../components/ui/spinner/spinner";
import { HotelsData } from "../../../types/api";
import { useHotels } from "../api/get-hotels";

export const HotelsList = () => {
    const hotelsQuery = useHotels();

    if (hotelsQuery.isLoading) return <Spinner />;

    const hotels = hotelsQuery.data;

    if (!hotels) return null;

    return (
        <div className="grid grid-cols-3 gap-2">
            {hotels.map((hotel) => (
                <HotelCard {...hotel} key={hotel.hotel_id} />
            ))}
        </div>
    );
};

const HotelCard = ({ name, address }: HotelsData) => {
    return (
        <Link
            to="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {address}
            </p>
        </Link>
    );
};
