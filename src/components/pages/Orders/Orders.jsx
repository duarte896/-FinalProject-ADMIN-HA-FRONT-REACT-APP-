import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";
import "../../../App.css";
import Sidebar from "../../Sidebar";

function Orders(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/orders`,
        headers: { Authentication: `Berarer` },
      });
      setData(response.data.allOrders);
    };
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Orders</h1>
            </div>
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
                      <tr key={item._id}>
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
        </main>
      </div>
    </div>
  );
}

export default Orders;
