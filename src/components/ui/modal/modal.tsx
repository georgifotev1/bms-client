import React, { useCallback, useEffect } from "react";
import { Button } from "../button/button";

interface ModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    onAction?: () => void;
    actionLabel: string;
    title?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onDismiss,
    onAction,
    actionLabel = "Confirm",
    title,
    children,
    size = "md",
}) => {
    const handleEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onDismiss();
            }
        },
        [isOpen, onDismiss],
    );

    useEffect(() => {
        document.addEventListener("keydown", handleEscKey);
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [handleEscKey]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onDismiss();
        }
    };

    const sizeClasses = {
        sm: "max-w-lg",
        md: "max-w-2xl",
        lg: "max-w-3xl",
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
                onClick={onDismiss}
            />

            <div
                id="default-modal"
                tabIndex={-1}
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
                onClick={handleOutsideClick}
            >
                <div
                    className={`relative p-4 w-full max-h-full ${sizeClasses[size]}`}
                >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {title && (
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                            </div>
                        )}

                        <div className="px-6 py-4">{children}</div>

                        <div className="border-t px-6 py-4 flex justify-end dark:border-gray-600">
                            <Button
                                type="button"
                                onClick={onDismiss}
                                variant="alternative"
                            >
                                Close
                            </Button>
                            {onAction && (
                                <Button
                                    type="button"
                                    onClick={onAction}
                                    variant="default"
                                >
                                    {actionLabel}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
