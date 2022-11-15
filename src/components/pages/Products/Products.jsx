import { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import { Link } from "react-router-dom";

function Products(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/admin/products`,
        headers: { Authentication: `Berarer` },
      });
      setData(response.data.allProducts);
      console.log(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline">
        <h2>Products</h2>
        <Link
          to={"/products/crear"}
          type="button"
          className="btn btn-sm btn-outline-secondary"
        >
          Add Product
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Product code</th>
              <th scope="col">Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Last Update</th>
              <th scope="col">View Product</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.stock}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                    <Link to={`/products/${item._id}`}>Enter</Link>
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

export default Products;
