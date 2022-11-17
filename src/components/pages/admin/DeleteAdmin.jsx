import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteAdmin({ admin, show, setShow }) {
  const navigate = useNavigate();
  const handleClose = () => setShow(false);

  const deleteAdmin = async (event) => {
    try {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/admins/${admin._id}`,
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/admins");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>You are deleting an admin!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>
            Are you sure you want to delete{" "}
            {admin.firstname + " " + admin.lastname} from de admins list?
          </h2>
          <p style={{ fontWeight: "bolder" }}>This can't be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={deleteAdmin}>
            Delete admin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAdmin;
