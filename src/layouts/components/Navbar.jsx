import React, { useState, useRef } from "react";
import Logo from "../../components/Logo";
import AccountDetails from "./NavbarItems/AccountDetails";
import NavContainer from "./NavbarItems/NavContainer";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/thunks/postsThunks";
import { useNavigate } from "react-router-dom";
import { postActions } from "../../store/slices/postSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshData = async () => {
    navigate("/");
    dispatch(postActions.setPost());
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(fetchPosts({ search: "", page: 1 }));
  };

  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef();

  const toggleSearch = (type) => {
    if (type === "on") {
      setSearchActive(true);
      setTimeout(() => {
        if (searchRef.current) {
          searchRef.current.focus();
        }
      }, 100);

      return;
    }

    searchRef.current.value = "";
    setSearchActive(false);
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
