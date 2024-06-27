import { uiActions } from "../../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "cookiejs";
import Avatar from "../../../components/Avatar";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { encryptData } from "../../../utils/enc";
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
      navigate("/login");
    }
  };

  const viewProfile = (id) => {
    const user = encodeURIComponent(encryptData(id));
    console.log(user);
    navigate(`/profile/${user}`);
  };

  return (
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
                <div className="user-profile-img">
                  <Avatar
                    className="rounded-circle"
                    width="35"
                    height="35"
                    alt="user"
                  />
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
                <div className="d-flex justify-content-between align-items-center py-3 px-7 pb-0">
                  <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
                  <button
                    type="button"
                    className="btn mb-1 waves-effect waves-light btn-outline-dark btn-sm"
                  >
                    <i className="ti ti-settings"></i>
                    Settings
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
  );
};

export default AccountDetails;
