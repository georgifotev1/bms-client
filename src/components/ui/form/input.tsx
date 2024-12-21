import { cn } from "../../../utils/cn";
import { Error } from "./error";
import { ValidationError } from "./validation";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  name: string;
  id: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  errors?: ValidationError<any>;
};
const defaultInputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white";
const defaultLabelClasses =
  "mb-2 text-sm font-medium text-gray-900 dark:text-white";

export const InputField = (props: InputProps) => {
  return (
    <div key={props.id}>
      <div className="flex justify-between">
        <label
          htmlFor={props.id}
          className={cn(defaultLabelClasses, props.className)}
        >
          {props.label}
        </label>
        <Error errorMessage={props.errors?.[props.name]} />
      </div>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className={cn(defaultInputClasses, props.className)}
        required={props.required}
      />
    </div>
  );
};
