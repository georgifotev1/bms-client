import { useEffect, useState } from "react";
import { Table } from "../../../components/ui/table/table";

type HotelsData = {
    hotel_id: string;
    name: string;
    address: string;
};

export const HotelsRoute = () => {
    const [data, setData] = useState<HotelsData[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/v1/hotels")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                setData(res.data);
            });
    }, []);
    return (
        <>
            <Table<Omit<HotelsData, "hotel_id">>
                data={data}
                columns={{
                    hotelName: {
                        name: "Name",
                        accessor: (data) => data.name,
                    },
                    hotelAddress: {
                        name: "Adress",
                        accessor: (data) => data.address,
                    },
                }}
            />
        </>
    );
};
