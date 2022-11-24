import styles from "./CreateProduct.module.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditCategory() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState();
  const params = useParams();
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/categories/${params.name}`,
          method: "GET",
        });
        if (response) {
          setCategory(response.data);
          setName(response.data.name);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories/${category._id}`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        data: {
          name,
        },
      });
      if (response) {
        navigate(`/categories`);
      }
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
