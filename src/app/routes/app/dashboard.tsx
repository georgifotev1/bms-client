import { useSelectedHotelStore } from "../../../store/selected-hotel-store";

export const DashboardRoute = () => {
    const { selectedHotel } = useSelectedHotelStore();
    return (
        <>
            <div className="mb-8">
                <h1>{selectedHotel.name}</h1>
                <p className="text-xl">{selectedHotel.address}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="border-2 border-gray-300 rounded-lg dark:border-gray-600 h-32"></div>
                <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 h-32"></div>
                <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 h-32"></div>
                <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 h-32"></div>
            </div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            </div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            </div>
        </>
    );
};
