import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content ">
          <Switch>
            {/* when using Switch, the order of the routes matters (specific ->
            generic) */}
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
