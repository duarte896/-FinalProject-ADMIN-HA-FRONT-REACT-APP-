import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";
import "../../../App.css";

function Orders(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/data`,
        headers: { Authentication: `Berarer` },
      });
      setData(response.data.allOrders);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h2>Orders</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Order traking Id</th>
              <th scope="col">State</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
              <th scope="col">Customer</th>
              <th scope="col">View Order</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item._id}</td>
                  <td>{item.orderStatus}</td>
                  <td>{item.updatedAt}</td>
                  <td>information</td>
                  <td>{item.userId}</td>
                  <td>
                    <Link to={`/orders/${item._id}`}>Enter</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
