import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateProduct() {
  const params = useParams();
  const [admin, setAdmin] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8000/admins/${params.id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response) {
          setAdmin(response.data);
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setEmail(response.data.email);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/admins/${admin._id}`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        data: {
          firstname,
          lastname,
          email,
        },
      });
      if (response) {
        navigate(`/admins/${admin._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return admin ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Edit Admin</h1>
          </div>
          <Container className={"border " + styles.form_container}>
            <form onSubmit={handleSubmit}>
              <div className="mt-3 mb-3">
                <label htmlFor="name" className="form-label">
                  Firstname
                </label>
                <input
                  value={firstname}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Lastname
                </label>
                <input
                  value={lastname}
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Email
                </label>
                <input
                  value={email}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Update Admin
                </button>
              </div>
            </form>
          </Container>
        </main>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default CreateProduct;
