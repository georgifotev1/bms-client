import { Link } from "../link/link";

export const AuthFooter = ({
  path,
  text,
  linkText,
}: {
  path: string;
  text: string;
  linkText: string;
}) => {
  return (
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      {text}{" "}
      <Link
        to={path}
        className="text-blue-700 hover:underline dark:text-blue-500"
      >
        {linkText}
      </Link>
    </div>
  );
};
