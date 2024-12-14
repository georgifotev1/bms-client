import { ReactNode } from "react";
import { cn } from "../../../utils/cn";

export type FormField = {
  type: string;
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
  fields: FormField[];
  onSubmit: (data: any) => void;
  submitButtonText?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

const defaultInputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white";
const defaultLabelClasses =
  "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

export const Form = ({
  title,
  fields,
  onSubmit,
  submitButtonText = "Submit",
  children,
  footer,
  ...props
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} {...props}>
      {title && (
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
      )}
      {fields?.map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className={cn(defaultLabelClasses, props.className)}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.id}
            placeholder={field.placeholder}
            className={cn(defaultInputClasses, props.className)}
            required={field.required}
          />
        </div>
      ))}

      {children}

      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {submitButtonText}
      </button>

      {footer}
    </form>
  );
};
