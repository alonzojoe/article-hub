import { useState, useRef } from "react";
import { uiActions } from "../../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "cookiejs";
import Avatar from "../../../components/Avatar";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { encryptData } from "../../../utils/enc";
import Modal from "../../../components/Modal";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";
const AccountDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.ui.appTheme);
  const { user } = useSelector((state) => state.auth);
  const toggleTheme = () => {
    const reverseTheme = appTheme === "dark" ? "light" : "dark";
    dispatch(uiActions.changeTheme(reverseTheme));
  };

  const themeIcon = `ti dark-color ${
    appTheme === "dark" ? "ti-moon-filled" : "ti-sun-filled"
  }`;

  const logoutHandler = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.log(error);
    } finally {
      Cookie.remove(`${import.meta.env.VITE_AUTH_KEY}`);
      localStorage.removeItem(import.meta.env.VITE_AUTH_USER);
      // navigate("/login");
      window.location.href = "/login";
    }
  };

  const viewProfile = (id) => {
    const user = encodeURIComponent(encryptData(id));
    console.log(user);
    navigate(`/profile/${user}`);
  };

  const [tabs, setTabs] = useState([
    { id: 1, name: "Profile", icon: "ti-user-circle", active: true },
    { id: 2, name: "Security", icon: "ti-lock", active: false },
  ]);

  const selectTab = (id) => {
    console.log(id);
    setTabs((prevData) =>
      prevData.map((data) => ({
        ...data,
        active: id === data.id,
      }))
    );
  };

  const [showSettings, setShowSettings] = useState();

  const closeModal = () => {
    selectTab(1);
    setShowSettings(false);
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
    <>
      {showSettings && (
        <Modal title="Account Settings" onClose={closeModal}>
          <Card>
            <ul
              className="nav nav-pills user-profile-tab"
              id="pills-tab"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-3 ${
                      tab.active ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => selectTab(tab.id)}
                  >
                    <i className={`ti ${tab.icon} me-2 fs-6`}></i>
                    <span className="d-none d-md-block">{tab.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            <>
              {tabs[0].active ? (
                <UpdateProfile user={user} onClose={setShowSettings} />
              ) : (
                <UpdatePassword user={user} onClose={setShowSettings} />
              )}
            </>
          </Card>
        </Modal>
      )}

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="#"
            className="nav-link d-flex d-lg-none align-items-center justify-content-center"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobilenavbar"
            aria-controls="offcanvasWithBothOptions"
          ></a>
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
            <li className="nav-item nav-icon-hover-bg rounded-circle d-lg-flex">
              {searchActive ? (
                <form className="position-relative">
                  <Input
                    ref={searchRef}
                    type="text"
                    className="form-control-sm py-2 ps-5"
                    id="text-srh"
                    placeholder="Search article"
                    onBlur={() => toggleSearch("off")}
                  />
                  <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
                </form>
              ) : (
                <a
                  onClick={() => toggleSearch("on")}
                  className="nav-link nav-icon-hover cursor-pointer text-dark"
                >
                  <i className="ti ti-search"></i>
                </a>
              )}
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-icon-hover cursor-pointer"
                onClick={toggleTheme}
              >
                <i className={themeIcon}></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => viewProfile(user?.id)}>
                <h5 className="mt-2 fw-semibold">{user?.name}</h5>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link pe-0"
                href="#"
                id="drop1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div className="user-profile-img position-relative">
                    <Avatar
                      className="rounded-circle"
                      width="35"
                      height="35"
                      alt="user"
                    />

                    <i
                      class="ti ti-chevron-down  bg-dark rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "14.5px",
                        right: "-1.5px",
                        fontSize: "13px",
                        color: "#fff",
                      }}
                    ></i>
                  </div>
                </div>
              </a>
              <div
                className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                aria-labelledby="drop1"
              >
                <div
                  className="profile-dropdown position-relative"
                  data-simplebar
                >
                  <div
                    data-v-c4be3a62=""
                    className="d-flex justify-content-between align-items-center py-3 px-7 pb-0"
                  >
                    <h5 data-v-c4be3a62="" className="mb-0 fs-5 fw-semibold">
                      User Profile
                    </h5>
                    <button
                      data-v-c4be3a62=""
                      type="button"
                      className="btn btn-rounded btn-dark btn-sm mb-1"
                      onClick={() => setShowSettings(true)}
                    >
                      <i data-v-c4be3a62="" className="ti ti-settings"></i>{" "}
                      Settings{" "}
                    </button>
                  </div>

                  <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                    <Avatar
                      className="rounded-circle"
                      width="70"
                      height="70"
                      alt="user"
                    />
                    <div className="ms-3">
                      <h5 className="mb-1 fs-3">{user?.name}</h5>
                      <p className="mb-0 d-flex text-dark align-items-center fs-2 gap-1">
                        <i className="ti ti-mail fs-3"></i> {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="d-grid py-4 px-7 pt-8">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={logoutHandler}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
