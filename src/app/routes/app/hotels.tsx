import { useEffect, useState } from "react";
import { Table } from "../../../components/ui/table/table";
import { api } from "../../../lib/api-client";

type HotelsData = {
  hotel_id: string;
  name: string;
  address: string;
};

export const HotelsRoute = () => {
  const [data, setData] = useState<HotelsData[]>([]);

  useEffect(() => {
    console.log("in useefect");
    api.get("/hotels").then((res) => setData(res));
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
