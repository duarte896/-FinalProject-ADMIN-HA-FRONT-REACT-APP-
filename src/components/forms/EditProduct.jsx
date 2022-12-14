import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditProduct() {
  const params = useParams();
  const [product, setProduct] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/categories`,
          method: "GET",
        });
        if (response) {
          setCategories(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/products/${params.slug}`,
        });
        if (response) {
          setProduct(response.data);
          setName(response.data.name);
          setType(response.data.type);
          setPrice(response.data.price);
          setStock(response.data.stock);
          setCategory(response.data.category._id);
          setDescription(response.data.description);
          setRadioValue(response.data.featured);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products/${product._id}`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        data: {
          name,
          type,
          price,
          stock,
          description,
          radioValue,
          category,
        },
      });
      if (response) {
        navigate(`/products`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return categories ? (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Edit Product</h1>
          </div>
          <Container className={"border " + styles.form_container}>
            <form onSubmit={handleSubmit}>
              <div className="mt-3 mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  value={name}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <input
                  value={type}
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  onChange={(event) => setType(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  value={price}
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  value={stock}
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  onChange={(event) => setStock(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Upload a new image. Watch out! This will overwrite your
                  previous image.
                </label>
                <input
                  value={image}
                  className="form-control"
                  type="file"
                  id="image"
                  name="image"
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  value={description}
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <label className="mb-2">Feature</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="feature"
                  id="true"
                  value={true}
                  onChange={(event) => setRadioValue(event.target.value)}
                />
                <label className="form-check-label" htmlFor="true">
                  True
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="feature"
                  id="false"
                  value={false}
                  onChange={(event) => setRadioValue(event.target.value)}
                />
                <label className="form-check-label" htmlFor="false">
                  False
                </label>
              </div>
              <div className="mb-3">
                <label className="mb-2">
                  Select a Category for new product:{" "}
                </label>
                <br />
                <select
                  name="select"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Update Product
                </button>
              </div>
            </form>
          </Container>
        </main>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
export default EditProduct;
