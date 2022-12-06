import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home, Review, Search } from "./Pages";
import { Header } from "./Components";

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [navigate]);
  return (
    <div className="App">
      <Header />
      {loading ? (
        <div className="App__preloader">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Review/*" element={<Review />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
