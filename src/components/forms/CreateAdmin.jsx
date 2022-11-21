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
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const token = useSelector((state) => state.user.user);
  const naviagate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmedPassword) {
      try {
        await axios({
          url: `${process.env.REACT_APP_API_URL}/admins`,
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          data: {
            firstname,
            lastname,
            email,
            password,
          },
        });
      } catch (error) {
        console.log(error);
      }
      naviagate("/admins");
    } else {
      setIncorrectPassword(true);
      setConfirmedPassword("");
      setPassword("");
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
                <label htmlFor="type" className="form-label">
                  Lastname
                </label>
                <input
                  value={lastname}
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
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
                  id="price"
                  name="price"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  type="passwword"
                  className="form-control"
                  id="stock"
                  name="stock"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Confirm password
                </label>
                <input
                  value={confirmedPassword}
                  type="passwword"
                  className="form-control"
                  id="stock"
                  name="stock"
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                />
              </div>
              {incorrectPassword && (
                <p style={{ color: "red" }}>
                  {" "}
                  Sorry! Your passwords didn't matched!{" "}
                </p>
              )}

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
