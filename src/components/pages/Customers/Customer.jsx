import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Customer() {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/users/${params.id}`,
      });
      setUser(response.data.oneUser);
    };
    getData();
  }, []);

  return (
    <>
      <h2>User</h2>
      <p>ID: {user._id}</p>
      <p>User: {user.firstname + " " + user.lastname}</p>
      <p>Shipping Adress: {user.address} </p>
      <p>Cell-phone: {user.cellphone}</p>
      <p>Email: {user.email}</p>
    </>
  );
}
export default Customer;
