import { AlignLeft, BellIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button/button";
import { HotelPicker } from "./hotel-picker";
import { ProfileButton } from "./profile-button";

export const NavBar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-start items-center">
                    <Button className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <AlignLeft />
                        <span className="sr-only">Toggle sidebar</span>
                    </Button>
                    <a
                        href="/"
                        className="flex items-center justify-between mr-4"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            BMS
                        </span>
                    </a>
                </div>
                <div className="flex items-center lg:order-2">
                    <HotelPicker />
                    <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 mx-4"></div>
                    <Button
                        type="button"
                        data-dropdown-toggle="notification-dropdown"
                        className="p-2 mr-1 mb-0 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon />
                    </Button>
                    <ProfileButton />
                </div>
            </div>
        </nav>
    );
};
