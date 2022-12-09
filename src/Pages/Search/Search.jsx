import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils";
import "./Search.css";

const Search = ({ filter, setFilter, searchParams, setSearchParams }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getCategories().then((data) => {
      setCategories(data);
      setIsLoading(false);
    });
  }, []);
  const handleClick = (category) => {
    setFilter(category);
    const newSearchParams = { ...searchParams };
    newSearchParams.category = category;
    setSearchParams(newSearchParams);
    
  };
  const removeFilter = () => {
    setFilter(null);
    const newSearchParams = { ...searchParams };
    newSearchParams.category = null;
    setSearchParams(newSearchParams);
  };
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
              {categories.map((category) => (
                <li key={category.slug}>
                  <div className="App__Search-category-box">
                    <Link
                      to={`/?category=${category.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p onClick={() => handleClick(category.slug)}>
                        {category.slug}
                      </p>
                    </Link>
                    {filter === category.slug ? (
                      <p onClick={removeFilter}>✖️</p>
                    ) : null}
                  </div>
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
