import React from "react";
import Logo from "../../components/Logo";
import AccountDetails from "./NavbarItems/AccountDetails";
import NavContainer from "./NavbarItems/NavContainer";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <NavContainer>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link text-nowrap logo-img cursor-pointer"
            id="headerCollapse"
            to="/"
          >
            <Logo width="60" height="120" />
          </Link>
        </li>
      </ul>

      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="p-2">
          <i className="ti ti-dots fs-7"></i>
        </span>
      </button>
      <AccountDetails />
    </NavContainer>
  );
};

export default Navbar;
