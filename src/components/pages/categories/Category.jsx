import styles from "./Category.module.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Sidebar from "../../Sidebar";
import DeleteCategory from "./DeleteCategory";

function Category() {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/categories/${params.name}`,
      });
      setCategory(response.data);
      setProducts(response.data.products);
    };
    getData();
  }, []);

  return category ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Category Info</h1>
          </div>
          <div className="d-flex justify-content-between mb-5">
            <div>
              <h3>{category.name}</h3>
              <p>ID: {category._id}</p>
            </div>
            <div className="">
              <Link
                to={`/categories/edit/${category.name}`}
                className="btn btn-success mb-2"
              >
                Update Category
              </Link>
              <Button
                className="d-block m-0"
                variant="danger"
                onClick={handleShow}
              >
                Delete Category
              </Button>
            </div>
          </div>
          <h3>Products({products.length})</h3>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Product Id</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item._id}</td>
                    <td>
                      <Link to={`/products/${item.slug}`}>Enter</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
        <DeleteCategory category={category} show={show} setShow={setShow} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default Category;
