import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./BestBooks.css";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksArr: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3000/books`)
      .then((result) => {
        this.setState({
          BooksArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBook = (event) => {
    event.preventDefault();

    const booksObj = {
      bookTitle: event.target.booktitle.value,
      bookDescription: event.target.bookdescription.value,
      bookStatus: event.target.bookstatus.value,
    };

    axios
      .post("http://localhost:3000/addBook", booksObj)
      .then((result) => {
        this.setState({
          BooksArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3000/deleteBook/${id}`)
      .then((result) => {
        this.setState({
          BooksArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>


        <Form onSubmit={this.addBook}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              name="booktitle"
              placeholder="Book Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              name="bookdescription"
              placeholder="Book description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              name="bookstatus"
              placeholder="Book status"
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>

        <Carousel>
          {this.state.BooksArr.length ? (
            this.state.BooksArr.map((item, index) => {
              return (
                <Carousel.Item id="labData" key={index}>
                  <img src={require("./img/library2.jpg")} alt={item.title} />
                  <Carousel.Caption>
                    <h4>Book title : {item.title} </h4>
                    <p>book description: {item.description}</p>
                    <p>movie status : {item.status}</p>
                    <button onClick={() => this.deleteBook(item._id)}>
                      Delete Book
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          ) : (
            <h3>No Books Found</h3>
          )}
        </Carousel>
      </>
    );
  }
}

export default Books;
