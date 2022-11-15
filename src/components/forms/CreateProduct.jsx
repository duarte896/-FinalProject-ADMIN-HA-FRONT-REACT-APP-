import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState } from "react";

function CreateProduct() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/admin/products`,
        method: "POST",
        data: {
          name,
          type,
          price,
          stock,
          description,
          radioValue,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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

          <div className="mb-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}
export default CreateProduct;
