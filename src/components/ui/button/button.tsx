import { forwardRef } from "react";
import { cn } from "../../../utils/cn";

export type ButtonVariants = "default" | "alternative" | "custom";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariants;
    children: React.ReactNode;
    onClick?: () => void;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { type, variant = "custom", children, onClick, className, ...props },
        ref,
    ) => {
        const baseStyles =
            "py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg";

        const variants = {
            default:
                "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            alternative:
                "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
        };

        const classes =
            variant === "custom"
                ? className
                : cn(baseStyles, variants[variant], className);

        return (
            <button
                type={type}
                className={classes}
                onClick={onClick}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    },
);
