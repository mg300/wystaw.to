// TopBar.jsx
import React from "react";
import "./TopBar.css";
import logo from "../src/images/Logow.png";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div id="topBar">
      <div className="left">
        <Link to="/">
          {" "}
          <img src={logo} alt="Footer Logo" className="footer-logo" />
        </Link>
      </div>
      <div className="right">
        <Link to="/addproduct">
          <button>Dodaj ogłoszenie</button>
        </Link>
        <Link to="/message">
          <button>Wiadomości</button>
        </Link>
        <Link to="/auth">
          {" "}
          <button>Zaloguj</button>
        </Link>
        <Link to="/userpanel">
          {" "}
          <button>Twoje ogłoszenia</button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
