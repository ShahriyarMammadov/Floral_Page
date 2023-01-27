import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <h1>Floral Studio</h1>
        </Link>
      </div>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/aboutUS"}>About us</NavLink>
        <NavLink to={"/wishList"}>WishList</NavLink>
        <NavLink to={"/Pricing"}>Pricing</NavLink>
        <NavLink to={"/addData"}>AddFlowers</NavLink>
        <i class="fa-solid fa-bars"></i>
      </nav>
    </header>
  );
};

export default Header;
