import React from "react";
import BestBooks from "./BestBooks";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.js";

class Books extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <BestBooks />
                </>
              }
            ></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default Books;