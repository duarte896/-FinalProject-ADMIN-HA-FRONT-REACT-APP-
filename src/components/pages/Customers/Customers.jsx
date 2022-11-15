import { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import { Link } from "react-router-dom";

function Users(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/users`,
        headers: { Authentication: `Berarer` },
      });
      setData(response.data.allUsers);
      console.log(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <h2>Users</h2>
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
                <tr key={item.id}>
                  <td>{item._id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <Link to={`/users/${item._id}`}>Enter</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;