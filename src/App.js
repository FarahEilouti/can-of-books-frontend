import React from "react";
import axios from "axios";


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksArr: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3051/books`)
      .then((result) => {
        console.log(result.data);
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
      <div>Books</div>
        {
          this.state.BooksArr.map(item =>{
            return(
              <>
                <h4>Book title : {item.title} </h4>
                <p>book  description: {item.description}</p>
                <p>movie status : {item.status}</p>
                <p>__</p>
              </>
            )
          })
        }

      </>

    )
  }
}

export default Books;
