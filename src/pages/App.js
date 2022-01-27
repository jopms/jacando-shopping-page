import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Cheese from "./Cheese";
import Header from "../components/Header";
import Categories from "../components/Categories";

/* Handles Routing */
const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Categories />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="cheese" element={<Cheese />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
