import { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";

function Users(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/users`,
      });
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Customers</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">User Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">View user</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>
                        <Link to={`/customers/${item._id}`}>Enter</Link>
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
