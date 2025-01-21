import { useState } from "react";
import { ZodObject } from "zod";
import { cn } from "../../../utils/cn";
import { Spinner } from "../spinner/spinner";
import { Error } from "./error";
import { handleFormValidation, ValidationError } from "./validation";

export type FormField = {
    type: string;
    name: string;
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    options?: { label: string; value: string | number }[];
};

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
    title?: string;
    fields: FormField[];
    onFormSubmit: (data: any) => void;
    schema: ZodObject<any>;
    isLoading: boolean;
    apiError: string;
    submitButtonText?: string;
};

const defaultInputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white";
const defaultLabelClasses =
    "mb-2 text-sm font-medium text-gray-900 dark:text-white";

export const Form = (props: FormProps) => {
    const [errors, setErrors] = useState<ValidationError<typeof props.schema>>(
        {},
    );
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        handleFormValidation({
            onError: setErrors,
            data: data,
            onSuccess: (validatedData) => {
                props.onFormSubmit(validatedData);
            },
            schema: props.schema,
        });
    };

    const renderField = (field: FormField) => {
        const commonProps = {
            name: field.name,
            id: field.id,
            className: cn(defaultInputClasses, props.className),
            required: field.required,
            defaultValue: field.defaultValue,
            disabled: field.disabled,
        };

        switch (field.type) {
            case "select":
                return (
                    <select {...commonProps}>
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            default:
                return (
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...commonProps}
                    />
                );
        }
    };
    const btnText = props.submitButtonText ?? "Submit";
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {props.title && (
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                    {props.title}
                </h5>
            )}
            {props.fields?.map((field) => (
                <div key={field.id}>
                    <div className="flex justify-between">
                        <label
                            htmlFor={field.id}
                            className={cn(defaultLabelClasses, props.className)}
                        >
                            {field.label}
                        </label>
                        <Error errorMessage={errors[field.name]} />
                    </div>

                    {renderField(field)}
                </div>
            ))}
            <Error errorMessage={props.apiError} />
            {props.children}

            <button
                type="submit"
                disabled={props.isLoading}
                className="flex justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {props.isLoading ? <Spinner /> : btnText}
            </button>
        </form>
    );
};
