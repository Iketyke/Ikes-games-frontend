import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Review, Search } from "./Pages";
import { Header } from "./Components";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Review/:review_id" element={<Review />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
