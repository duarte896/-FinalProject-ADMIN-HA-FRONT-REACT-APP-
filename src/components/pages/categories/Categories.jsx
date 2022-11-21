import { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../Sidebar";
import { BiSearch } from "react-icons/bi";
import styles from "./Category.module.css";
import { useSelector } from "react-redux";

function Users() {
  const [categories, setCategories] = useState([]);
  const token = useSelector((state) => state.user.user);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data);
    };
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Categories </h1>

            <Link
              to={"/categories/create"}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Create new Category
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Category Id</th>

                  <th scope="col">View Category</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item._id}</td>
                      <td className={styles.viewCategory}>
                        <Link to={`/categories/${item.name}`}>
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
  );
}

export default Users;
