import React, { useState, useRef } from "react";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import AccountDetails from "./NavbarItems/AccountDetails";
import NavContainer from "./NavbarItems/NavContainer";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/thunks/postsThunks";
import { useNavigate } from "react-router-dom";
import { postActions } from "../../store/slices/postSlice";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshData = async () => {
    navigate("/");
    console.log("route details", location);
    if (location.pathname !== "/") return;
    dispatch(postActions.resetCurrentPage());
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
      {/* <div>
        <ul
          className="nav nav-pills user-profile-tab"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-3 active`}
              type="button"
            >
              <i className={`ti ti-home me-2 fs-6`}></i>
              <span className="d-none d-md-block">Home</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-3`}
              type="button"
            >
              <i className={`ti ti-user me-2 fs-6`}></i>
              <span className="d-none d-md-block">Home</span>
            </button>
          </li>
        </ul>
      </div> */}

      <div className="d-flex gap-2">
        <form className="position-relative d-none">
          <Input
            type="text"
            className="form-control-sm py-2 ps-5"
            id="text-srh"
            placeholder="Search article"
          />
          <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
        </form>
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
            {/* <i class="ti ti-chevron-down text-dark fs-10"></i> */}
            <i className="ti ti-dots text-dark fs-10"></i>
          </span>
        </button>
      </div>

      <AccountDetails />
    </NavContainer>
  );
};

export default Navbar;
