import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar";

function Order() {
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/orders/${params.id}`,
      });
      console.log(response.data);
      setOrder(response.data.oneOrder);
      setProducts(response.data.oneOrder.products);
      setUser(response.data.oneOrder.userId);
    };
    getData();
  }, []);

  return order ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Order ID : {order._id}</h1>
          </div>

          <p>Date of issue: {order.createdAt}</p>
          <p>Status: {order.orderStatus}</p>
          <p>Products</p>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Product Id</th>
                <th scope="col">Product name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Paid price</th>
                <th scope="col">View Product</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>information</td>
                    <td>${item.price}</td>
                    <td>
                      <Link to={`/product/${item._id}`}>Watch</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2>User</h2>
          <p>ID: {user._id}</p>
          <p>User: {user.firstname + " " + user.lastname}</p>
          <p>Shipping Adress: {user.address} </p>
          <p>Cell-phone: {user.cellphone}</p>
          <p>Email: {user.email}</p>
        </main>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default Order;
