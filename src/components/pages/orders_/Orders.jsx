import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Orders.module.css";
import "../../../App.css";
import Sidebar from "../../Sidebar";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

function Orders() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/orders`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
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
                    <tr className={styles.order} key={item._id}>
                      <td>{item._id}</td>
                      <td>
                        {item.orderStatus === "Pending payment" && (
                          <span className={styles.pending}>
                            {item.orderStatus}
                          </span>
                        )}
                        {item.orderStatus === "Order placed" && (
                          <span className={styles.placed}>
                            {item.orderStatus}
                          </span>
                        )}
                        {item.orderStatus === "Shipped" && (
                          <span className={styles.shipped}>
                            {item.orderStatus}
                          </span>
                        )}
                        {item.orderStatus === "Delivered" && (
                          <span className={styles.delivered}>
                            {item.orderStatus}
                          </span>
                        )}
                      </td>
                      <td>{item.updatedAt}</td>
                      <td>${item.orderTotal}</td>
                      <td>{item.user}</td>
                      <td className={styles.viewOrder}>
                        <Link to={`/orders/${item._id}`}>
                          <BiSearch />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Orders;
