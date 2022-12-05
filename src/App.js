import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Review, Search } from "./Pages";
import { Header } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Search" element={<Search />} />
            </Routes>
        </div>
    </BrowserRouter>
    );
};

export default App;
