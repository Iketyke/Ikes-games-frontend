import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils";
import "./Search.css";

const Search = ({filter, setFilter}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCategories().then((data) => {
      console.log(data)
      setCategories(data);
      setIsLoading(false);
    });
  }, [filter]);
  const handleClick = (category) => {
    setFilter(category);
  }
  const removeFilter = () => {
    setFilter(null);
  }
  return (
    <>
      {isLoading ? (
        <div className="App__Home-loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App__Search">
          <div className="App__Search-categories">
            <h2>Categories</h2>
            <ul>
              {categories.map(category => (
                <li  key={category.slug} >
                  <Link to="/" style={{textDecoration: "none"}}><div className="App__Search-category-box"><p onClick={() => handleClick(category.slug)}>{category.slug}</p>{filter === category.slug ? (<p onClick={removeFilter}>✖️</p>) : null}</div></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
