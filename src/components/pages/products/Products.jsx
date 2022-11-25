import { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";
import { BiSearch } from "react-icons/bi";
import styles from "./Product.module.css";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/products`,
        });
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Products ({data.length})</h1>
            <Link
              to={"/products/create"}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Create new product
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Last Update</th>
                  <th scope="col">Product Id</th>
                  <th scope="col">View Product</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.category.name}</td>
                      <td>${item.price}</td>
                      <td>{item.stock}</td>
                      <td>
                        {new Date(item.updatedAt).toLocaleDateString("es-ES")}
                      </td>
                      <td>{item._id}</td>
                      <td>
                        <Link to={`/products/${item.slug}`}>
                          <BiSearch className={styles.viewProduct} />
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

export default Products;
