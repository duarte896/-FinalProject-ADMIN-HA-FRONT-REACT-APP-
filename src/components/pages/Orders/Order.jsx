import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsGear } from "react-icons/bs";

function Order() {
  const [order, setOrder] = useState();
  const [orderStatus, setOrderStatus] = useState(0);
  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  const params = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/orders/${params.id}`,
      });

      setOrder(response.data);
      setProducts(response.data.products);
      setUser(response.data.user);
    };
    getData();
  }, []);

  const updateStatus = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/orders/${order._id}`,
      method: "PATCH",
      data: {
        orderStatus,
      },
    });
    handleClose();
  };
  console.log(orderStatus);
  return order ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Order ID : {order._id}</h1>
          </div>
          <h3 style={{ display: "inline-block" }}>
            Status:
            {order.orderStatus === "Pending payment" && (
              <span id="pending">{order.orderStatus}</span>
            )}
            {order.orderStatus === "Order placed" && (
              <span id="placed">{order.orderStatus}</span>
            )}
            {order.orderStatus === "Shipped" && (
              <span id="shipped">{order.orderStatus}</span>
            )}
            {order.orderStatus === "Delivered" && (
              <span id="delivered">{order.orderStatus}</span>
            )}
          </h3>
          <Button id="update" onClick={handleShow}>
            <BsGear />
          </Button>
          <p>Date of issue: {order.createdAt}</p>
          <p>Last update: {order.updatedAt}</p>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update order status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <select onChange={(event) => setOrderStatus(event.target.value)}>
                <option value={"Pending payment"}>Pending payment</option>
                <option value={"Order pleaced"}>Order placed</option>
                <option value={"Shipped"}>Shipped</option>
                <option value={"Delivered"}>Delivered</option>
              </select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={updateStatus}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <p>Products</p>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Product name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Paid price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Order Total:</td>
                <td></td>
                <td style={{ fontWeight: "bolder" }}>${order.orderTotal}</td>
              </tr>
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
