import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import { Home, Review, Search } from "./Pages";
import { Header } from "./Components";

const App = () => {
  const [filter, setFilter] = useState(null);
  
  return (
    <div className="App">
      <Header filter={filter}/>

      <Routes>
        <Route path="/" element={<Home filter={filter} setFilter={setFilter}/>} />
        <Route path="/Review/:review_id" element={<Review/>} />
        <Route path="/Search" element={<Search filter={filter} setFilter={setFilter}/>} />
      </Routes>
    </div>
  );
};

export default App;
