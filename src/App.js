import React, { useEffect, useState } from "react";
import { Routes, Route, useSearchParams} from "react-router-dom";
import "./App.css";
import { Home, Review, Search } from "./Pages";
import { Header } from "./Components";

const App = () => {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [order, setOrder] = useState(null);
  let [searchParams, setSearchParams] = useState(new URLSearchParams());
  let [search, setSearch] = useSearchParams();

  useEffect(() => {
    setSearch(searchParams)
  
  }, [searchParams])
  
  return (
    <div className="App">
      <Header filter={filter} setSort={setSort} setOrder={setOrder} setSearchParams={setSearchParams} searchParams={searchParams}/>

      <Routes>
        <Route path="/" element={<Home filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} order={order} setOrder={setOrder} searchParams={searchParams}/>}  />
        <Route path="/Review/:review_id" element={<Review/>} />
        <Route path="/Search" element={<Search filter={filter} setFilter={setFilter} searchParams={searchParams} setSearchParams={setSearchParams}/>} />
      </Routes>
    </div>
  );
};

export default App;
