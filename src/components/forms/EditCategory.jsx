import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditCategory() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories/${params.name}`,
        method: "GET",
      });
      setCategory(response.data);
      setName(response.data.name);
    };
    getCategory();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories/${category._id}`,
        method: "PATCH",
        data: {
          name,
        },
      });
      navigate(`/categories`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    category && (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Update Category</h1>
            </div>
            <Container className={"border " + styles.form_container}>
              <form onSubmit={handleSubmit}>
                <div className="mt-3 mb-3">
                  <label htmlFor="name" className="form-label">
                    Category Name
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
                <div className="mb-3 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Update Category
                  </button>
                </div>
              </form>
            </Container>
          </main>
        </div>
      </div>
    )
  );
}
export default EditCategory;
