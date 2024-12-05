import { ReactNode } from "react";

type TableProps<T extends object> =
    React.TableHTMLAttributes<HTMLTableElement> & {
        columns: Record<
            string,
            {
                name: string;
                accessor: (data: T) => ReactNode | string | undefined;
            }
        >;
        data: T[];
    };

export const Table = <T extends object>(props: TableProps<T>) => {
    const { columns, data } = props;
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {Object.keys(columns).map((key) => {
                            const { name } = columns[key];
                            return (
                                <th key={key} scope="col" className="px-6 py-3">
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
                                const { accessor } = columns[key];
                                return (
                                    <td key={key} className="px-6 py-4">
                                        {accessor(rowData)}
                                    </td>
                                );
                            })}
                            <td className="px-6 py-4 text-right">
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
