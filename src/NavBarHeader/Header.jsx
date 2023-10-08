import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <Link to="/">
        <button className="header-button quiz">Quiz</button>
      </Link>
      <Link to="/rules">
        <button className="header-button rules">Rules</button>
      </Link>
    </div>
  );
};

export default Header;
