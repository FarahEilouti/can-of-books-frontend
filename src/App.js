import React from "react";
import BestBooks from "./BestBooks";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { withAuth0 } from "@auth0/auth0-react";

class App  extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={isAuthenticated && <BestBooks />} />
            <Route
              exact
              path="/about"
              element={isAuthenticated && <Profile />}
            />
          </Routes>

         
        </Router>
      </>
    );
  }
}

export default withAuth0(App);