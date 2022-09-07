import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./BestBooks.css";

class SelectBook extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add your book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addBook}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  name="booktitle"
                  placeholder="Book Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book description</Form.Label>
                <Form.Control
                  type="text"
                  name="bookdescription"
                  placeholder="Book description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book status</Form.Label>
                <Form.Control
                  type="text"
                  name="bookstatus"
                  placeholder="Book status"
                />
              </Form.Group>
              <Modal.Footer>
              <Button
              variant="primary"
              type="submit"
              onClick={this.props.handleClose}
            >
              Add new book
            </Button>
            </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectBook;