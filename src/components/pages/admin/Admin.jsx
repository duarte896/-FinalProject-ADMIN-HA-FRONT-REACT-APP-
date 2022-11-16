import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar";

function Admin() {
  const [admin, setAdmin] = useState({});
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admins/${params.id}`,
      });
      setAdmin(response.data);
    };
    getData();
  }, []);

  return admin ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">User Info</h1>
          </div>

          <h3>ID: {admin._id}</h3>
          <p>Name: {admin.firstname + " " + admin.lastname}</p>
          <p>Email: {admin.email}</p>
        </main>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default Admin;
