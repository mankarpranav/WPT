import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/"  element={<ProductListing/>} />
          <Route path="/product/:productId" component={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
      </Routes> 
    </div>
  );
}

export default App;
