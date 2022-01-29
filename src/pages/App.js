import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductItemCollection from "../components/ProductItemCollection";
import Header from "../components/Header";
import Categories from "../components/Sidebar";

/* Handles Routing */
const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Categories />
        <Routes>
          <Route path="/" exact element={<ProductItemCollection category={"home"}/>} />
          <Route path="vegetables" element={<ProductItemCollection category={"vegetables"}/>} />
          <Route path="fruits" element={<ProductItemCollection category={"fruits"}/>} />
          <Route path="cheese" element={<ProductItemCollection category={"cheese"}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
