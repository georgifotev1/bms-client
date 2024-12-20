import { cn } from "../../../utils/cn";

export type ErrorProps = {
  errorMessage?: string | null;
};

export const Error = ({ errorMessage }: ErrorProps) => {
  return (
    <div
      role="alert"
      aria-label={errorMessage ?? "No Error"}
      className={cn(
        "text-sm font-semibold text-red-500",
        !errorMessage && "invisible",
      )}
    >
      {errorMessage ?? "No Error"}
    </div>
  );
};
