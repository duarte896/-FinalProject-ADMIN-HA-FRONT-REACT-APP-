import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateProduct() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState();
  const token = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories`,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products`,
        method: "POST",
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
      navigate(`/products/${response.data}`);
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
            <h1 className="h2">Create Product</h1>
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
                  Image
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
                  Add Product
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
export default CreateProduct;
