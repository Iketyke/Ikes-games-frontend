import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <div className="App__Header-home">
          <div className="App__Header-icon_info" />
          <h1>Ike's Games</h1>
          <div className="App__Header-icon_search" />
        </div>
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
