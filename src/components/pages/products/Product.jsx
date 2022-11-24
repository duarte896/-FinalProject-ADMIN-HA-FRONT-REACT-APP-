import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Sidebar from "../../Sidebar";
import DeleteProduct from "./DeleteProduct";

function Product() {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/products/${params.slug}`,
        });
        if (response) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return product ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Product Info</h1>
            <div>
              <Link
                to={`/products/edit/${product.slug}`}
                type="button"
                className="btn btn-success mb-2"
              >
                Update product
              </Link>
              <Button
                className="d-block m-0"
                variant="danger"
                onClick={handleShow}
              >
                Delete product
              </Button>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                {" "}
                <h3>Product: {product.name}</h3>
                <p>ID: {product._id}</p>
                <p>Category: {product.category.name}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock} </p>
                <p>{product.description}</p>
              </div>
              <div className="productImg col-6">
                <img className="img-fluid" src={product.image} alt="" />
              </div>
            </div>
          </div>
        </main>
        <DeleteProduct product={product} show={show} setShow={setShow} />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default Product;
