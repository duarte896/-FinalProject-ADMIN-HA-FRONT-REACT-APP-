import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar";
import Styles from "./Product.module.css";

function Product() {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/products/${params.slug}`,
      });
      setProduct(response.data);
    };
    getData();
  }, []);

  return product ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Product Info</h1>
            <Link
              to={`/products/edit/${product.slug}`}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Edit this product
            </Link>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                {" "}
                <h3>ID: {product._id}</h3>
                <p>Product: {product.name}</p>
                <p>Category: {product.category.name}</p>
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock} </p>
                <p>{product.description}</p>
              </div>
              <div className="productImg col-6">
                <img className="img-fluid" src={product.image} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default Product;
