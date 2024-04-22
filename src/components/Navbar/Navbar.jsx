import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


const Navbar = ({setshowlogin}) => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="error" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/'  onClick={() => setmenu("home")} className={menu === "home" ? "active" : " "} >Home</Link>

        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : " "}
        >
          menu
        </li>
        <li
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : " "}
        >
          mobile-app
        </li>
        <li
          onClick={() => setmenu("contact us")}
          className={menu === "contact us" ? "active" : " "}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="error"
          className="search"
          style={{ width: "22px" }}
        />
        <div className="navbar-serach-icons">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="error" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setshowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
