import axios from "axios";
import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { saveTokenTask } from "../../../redux/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@hack.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/admins/tokens`,
        method: "POST",
        data: { email, password },
      });
      if (response) {
        navigate("/");
        return dispatch(saveTokenTask(response.data.token));
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div className={styles.body_background}>
      <div className="container">
        <div className={styles.row + " row"}>
          <div className={styles.leftCol + " col"}></div>
          <div className={styles.rightCol + " col"}>
            <div className={styles.formLogin}>
              <form className="p-2 mb-1" action="" onSubmit={handleSubmit}>
                <h3
                  className={styles.login_title + " modal-title mb-3"}
                  id="formModalLabel"
                >
                  Login
                </h3>

                <div className="form-group mt-2">
                  <input
                    value={email}
                    type="email"
                    name="email"
                    className={styles.form_font + " form-control"}
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    value={password}
                    type="password"
                    name="password"
                    className={styles.form_font + " form-control"}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <p className={styles.errorMessage + " pt-3"}>{message}</p>
                </div>
                <div></div>
                <button
                  style={{ color: "white" }}
                  type="submit"
                  className="btn mt-1"
                >
                  Login
                </button>
              </form>
            </div>
            <div className={styles.usertest}>
              <span>
                You can login as an administrator with this credentials:
              </span>
              <span className={styles.email}>
                E-mail:<span className={styles.value}> admin@hack.com.</span>
              </span>
              <span>
                Password: <span className={styles.value}> 123456.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
