import { User } from "lucide-react";
import { Navigate } from "react-router";
import { Button } from "../../../../components/ui/button/button";
import { paths } from "../../../../config/paths";
import { useLogout } from "../../../../lib/auth";
import { cn } from "../../../../utils/cn";
import useComponentVisible from "../../../../utils/useComponentVisible";

export const ProfileButton = () => {
    const logout = useLogout();
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible();

    const toggle = () => {
        setIsComponentVisible((state) => !state);
    };

    if (logout.isSuccess) {
        return <Navigate to={paths.auth.login.getHref()} />;
    }

    return (
        <div className="relative">
            <Button
                type="button"
                className="p-2 mr-1 mb-0 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                ref={ref}
                onClick={toggle}
            >
                <span className="sr-only">Profile</span>
                <User />
            </Button>
            <div
                className={cn(
                    "absolute right-1/2 top-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
                    !isComponentVisible && "hidden",
                )}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Profile
                        </a>
                    </li>
                </ul>
                <div className="py-2">
                    <Button
                        type="submit"
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={() => logout.mutate()}
                    >
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    );
};
