import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DeleteCategory({ category, show, setShow }) {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);

  const deleteCategory = async () => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories/${category._id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response) {
        navigate("/categories");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>You are deleting a Category!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>
            Are you sure you want to delete {category.name} from de category
            list?
          </h2>
          <p style={{ fontWeight: "bolder" }}>
            All products that belong to this category will be deleted. This
            can't be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={deleteCategory}>
            Delete Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteCategory;
