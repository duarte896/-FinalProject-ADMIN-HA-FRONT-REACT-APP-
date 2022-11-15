import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Order() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/orders/${params.id}`,
        headers: { Authentication: `Berarer` },
      });
      setData(response.data.oneOrder);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <h2>Order ID : {data._id}</h2>
    </>
  );
}
export default Order;
