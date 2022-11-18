import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Sidebar from "../../Sidebar";
import DeleteAdmin from "./DeleteAdmin";

function Admin() {
  const [admin, setAdmin] = useState({});
  const [show, setShow] = useState(false);
  const params = useParams();
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
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
            <h1 className="h2">Admin Info</h1>
          </div>

          <h3>ID: {admin._id}</h3>
          <p>Name: {admin.firstname + " " + admin.lastname}</p>
          <p>Email: {admin.email}</p>

          <Button variant="danger" onClick={handleShow}>
            Delete admin
          </Button>
          <Button
            variant="success"
            onClick={() => navigate(`/admins/edit/${admin._id}`)}
          >
            Update Admin
          </Button>
        </main>
        <DeleteAdmin admin={admin} show={show} setShow={setShow} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default Admin;
