import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
    <>
      <h2>Order ID : {order._id}</h2>
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
          <tr>Total</tr>
        </tbody>
      </table>
      <h2>User</h2>
      <p>ID: {user._id}</p>
      <p>User: {user.firstname + " " + user.lastname}</p>
      <p>Shipping Adress: {user.address} </p>
      <p>Cell-phone: {user.cellphone}</p>
      <p>Email: {user.email}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
}
export default Order;
