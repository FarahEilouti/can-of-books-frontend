import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class SelectBookUpdate extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update this book </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.updateBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="bookTitle"
                defaultValue={this.props.bookChosen.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="bookDescription"
                defaultValue={this.props.bookChosen.description}
              />
              <Form.Text className="text-muted">
                write an overview about this book and What is the topic of this
                book
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Book Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Status"
                name="bookStatus"
                defaultValue={this.props.bookChosen.status}
              />
              <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Modal.Footer>
              <Button
              variant="primary"
              type="submit"
            >
              Save Changes
            </Button>
            </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
    );
  }
}
export default SelectBookUpdate;