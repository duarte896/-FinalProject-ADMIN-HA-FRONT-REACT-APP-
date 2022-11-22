import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar";
import { useSelector } from "react-redux";

function Customer() {
  const [user, setUser] = useState();
  const token = useSelector((state) => state.user.token);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/users/${params.id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return user ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">User Info</h1>
          </div>

          <h3>ID: {user._id}</h3>
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
export default Customer;
