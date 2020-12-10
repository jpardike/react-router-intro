import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

import "./App.css";

class App extends React.Component {
  state = {
    user: {},
  };

  // componentDidMount() {
  //   // Make API call to get the user
  //   const userFromApi = {
  //     user: {
  //       name: "John Doe",
  //       username: "Johnny D",
  //       email: "jdoe@gmail.com",
  //     },
  //   };

  //   this.setState(userFromApi);
  // }

  render() {
    return (
      <div>
        <Navbar username={this.state.user.username} />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products" render={() => <ProductsPage user={this.state.user} />} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
