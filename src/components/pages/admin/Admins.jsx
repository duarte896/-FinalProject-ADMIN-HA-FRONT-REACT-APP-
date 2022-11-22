import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar";
import { BiSearch } from "react-icons/bi";
import styles from "./Admins.module.css";
import { useSelector } from "react-redux";

function Admins() {
  const token = useSelector((state) => state.user.token);
  const [admins, setAdmins] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/admins`,
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response) {
          setAdmins(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return admins ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Admins</h1>
            <Link
              to={"/admins/create"}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Add Admin
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Admin Id</th>
                  <th scope="col">View admin</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item._id}</td>
                      <td className={styles.viewAdmin}>
                        <Link to={`/admins/${item._id}`}>
                          <BiSearch />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Admins;
