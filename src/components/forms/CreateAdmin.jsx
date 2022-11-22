import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateAdmin() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [message, setMessage] = useState("");
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/admins`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        data: {
          firstname,
          lastname,
          email,
          password,
          confirmedPassword,
        },
      });
      if (response) {
        navigate("/admins");
      }
    } catch (error) {
      console.log(error.response.data.msg);
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Create Admin</h1>
          </div>
          <Container className={"border " + styles.form_container}>
            <form onSubmit={handleSubmit}>
              <div className="mt-3 mb-3">
                <label htmlFor="name" className="form-label">
                  Name
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
                <label htmlFor="lastname" className="form-label">
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
                <label htmlFor="email" className="form-label">
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmedPassword" className="form-label">
                  Confirm password
                </label>
                <input
                  value={confirmedPassword}
                  type="password"
                  className="form-control"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                />
              </div>
              <p style={{ color: "red" }}>{message}</p>
              <div className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Create Admin
                </button>
              </div>
            </form>
          </Container>
        </main>
      </div>
    </div>
  );
}
export default CreateAdmin;
