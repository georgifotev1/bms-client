import { ReactNode } from "react";
import { cn } from "../../../utils/cn";

type TableProps<T extends object> =
    React.TableHTMLAttributes<HTMLTableElement> & {
        columns: Record<
            string,
            {
                name: string;
                accessor: (data: T) => ReactNode | string | undefined;
                small?: boolean;
            }
        >;
        data: T[];
    };

export const Table = <T extends object>(props: TableProps<T>) => {
    const { columns, data } = props;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm table-fixed text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {Object.keys(columns).map((key) => {
                            const { name, small } = columns[key];
                            return (
                                <th
                                    key={key}
                                    scope="col"
                                    className={cn(
                                        "px-6 py-3 truncate",
                                        small && "w-8",
                                    )}
                                >
                                    {name}
                                </th>
                            );
                        })}
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, index) => (
                        <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            {Object.keys(columns).map((key) => {
                                const { accessor, small } = columns[key];
                                return (
                                    <td
                                        key={key}
                                        className={cn(
                                            "px-6 py-3",
                                            small && "w-8",
                                        )}
                                    >
                                        {accessor(rowData)}
                                    </td>
                                );
                            })}
                            <td className="px-6 py-4 w-8 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
