import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Sidebar from "../../Sidebar";
import DeleteAdmin from "./DeleteAdmin";
import { useSelector } from "react-redux";

function Admin() {
  const [admin, setAdmin] = useState({});
  const [show, setShow] = useState(false);
  const params = useParams();
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/admins/${params.id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response) {
          setAdmin(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
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
