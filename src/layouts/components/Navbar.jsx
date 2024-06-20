import React from "react";
import Logo from "../../components/Logo";
import AccountDetails from "./NavbarItems/AccountDetails";
import NavContainer from "./NavbarItems/NavContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/thunks/postsThunks";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshData = async () => {
    navigate("/");
    dispatch(fetchPosts());
  };
  return (
    <NavContainer>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link text-nowrap logo-img cursor-pointer"
            id="headerCollapse"
            onClick={refreshData}
          >
            <Logo width="60" height="120" />
          </a>
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
