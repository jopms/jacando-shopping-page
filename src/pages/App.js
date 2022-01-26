import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Cheese from "./Cheese";
import Header from "../components/Header";

/* Handles Routing */
const App = () => {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="cheese" element={<Cheese />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
