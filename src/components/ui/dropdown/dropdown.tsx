import { ReactNode } from "react";
import { cn } from "../../../utils/cn";
import useComponentVisible from "../../../utils/useComponentVisible";
import { Button, ButtonVariants } from "../button/button";
import { Link } from "../link/link";

interface DropdownProps {
    children: ReactNode;
    buttonClassName?: string;
    buttonVariant?: ButtonVariants;
    dropdownClassName?: string;
    dropdownPosition: "center" | "left";
    items?: Array<{
        label: string;
        href?: string;
        onClick?: () => void;
    }>;
}
export const Dropdown = (props: DropdownProps) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible();

    const toggle = () => {
        setIsComponentVisible((state) => !state);
    };

    return (
        <div className="relative w-min">
            <Button
                type="button"
                className={cn(
                    props.buttonClassName ??
                        "p-2 mr-1 mb-0 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",
                )}
                ref={ref}
                onClick={toggle}
                variant={props.buttonVariant}
            >
                {props.children}
            </Button>
            <div
                className={cn(
                    "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
                    props.dropdownPosition === "center" &&
                        "-translate-x-1/2 left-1/2",
                    props.dropdownPosition === "left" && "left-0", // todo
                    "top-full mt-1",
                    !isComponentVisible && "hidden",
                )}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {props.items &&
                        props.items.map((item, i) => {
                            if (item.href) {
                                return (
                                    <li key={i}>
                                        <Link
                                            to={item.href}
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white truncate"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            }
                            if (item.onClick) {
                                return (
                                    <Button
                                        key={i}
                                        type="submit"
                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white truncate"
                                        onClick={item.onClick}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            }
                        })}
                </ul>
            </div>
        </div>
    );
};
