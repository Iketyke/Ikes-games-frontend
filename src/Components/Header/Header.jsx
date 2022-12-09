import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import SortMenu from "../SortMenu/SortMenu";

const Header = ({ filter, setSort, setOrder, setSearchParams, searchParams}) => {
  const [showSort, setShowSort] = useState(false);
  const showSortMenu = () => {
    setShowSort(!showSort);
  };

  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <>
          {filter ? (
            <div className="App__Header-filtered">
              <Link to="/search">
                <div className="App__Header-icon_back" />
              </Link>
              <h1>{filter}</h1>
              <div onClick={showSortMenu} className="App__Header-icon_sort" />
              {showSort ? <SortMenu setSort={setSort} setOrder={setOrder} setSearchParams={setSearchParams} searchParams={searchParams}/> : null}
            </div>
          ) : (
            <div className="App__Header-home">
              <div onClick={showSortMenu} className="App__Header-icon_sort" />
              {showSort ? <SortMenu setSort={setSort} setOrder={setOrder} setSearchParams={setSearchParams} searchParams={searchParams}/> : null}
              <h1>Ike's Games</h1>
              <Link to="/Search">
                <div className="App__Header-icon_search" />
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="App__Header-review">
          <Link to="/">
            <div className="App__Header-icon_back" />
          </Link>
          <h1>Ike's Games</h1>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Header;
