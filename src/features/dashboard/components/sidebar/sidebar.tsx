import { Bed, LucideIcon, PieChart } from "lucide-react";
import { NavLink } from "react-router";
import { paths } from "../../../../config/paths";

type DashboardPage = {
    path: string;
    icon: LucideIcon;
    label: string;
};

const pages: DashboardPage[] = [
    {
        path: paths.app.dashboard.getHref(),
        icon: PieChart,
        label: "Dashboard",
    },
    {
        path: paths.app.rooms.getHref(),
        icon: Bed,
        label: "Rooms",
    },
];

export const SideBar = () => {
    return (
        <aside
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidenav"
            id="drawer-navigation"
        >
            <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                <ul className="space-y-2">
                    {pages.map((page) => (
                        <li key={page.path}>
                            <NavLink
                                to={page.path}
                                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <page.icon />
                                <span className="ml-3">{page.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};
