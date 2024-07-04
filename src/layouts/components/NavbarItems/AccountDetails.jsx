import { uiActions } from "../../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "cookiejs";
import Avatar from "../../../components/Avatar";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { encryptData } from "../../../utils/enc";
import Modal from "../../../components/Modal";
import Card from "../../../components/Card";
import defaultProfile from "../../../assets/images/avatars/user-default.jpg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
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
    <>
      <Modal>
        <Card>
          <ul
            className="nav nav-pills user-profile-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-3"
                id="pills-account-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-account"
                type="button"
                role="tab"
                aria-controls="pills-account"
                aria-selected="false"
                tabindex="-1"
              >
                <i className="ti ti-user-circle me-2 fs-6"></i>
                <span className="d-none d-md-block">Account</span>
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-3"
                id="pills-security-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-security"
                type="button"
                role="tab"
                aria-controls="pills-security"
                aria-selected="false"
                tabindex="-1"
              >
                <i className="ti ti-lock me-2 fs-6"></i>
                <span className="d-none d-md-block">Security</span>
              </button>
            </li>
          </ul>
          <div className="profile">
            <div className="w-100 border position-relative overflow-hidden">
              <div className="p-4">
                <h4>Update Profile</h4>
                <div className="text-center">
                  <img
                    src={defaultProfile}
                    alt="modernize-img"
                    className="img-fluid rounded-circle"
                    width="120"
                    height="120"
                  />
                  <div className="d-flex align-items-center justify-content-center my-4 gap-6">
                    <button className="btn btn-primary">Upload</button>
                    <button className="btn bg-danger-subtle text-danger">
                      Reset
                    </button>
                  </div>
                  <p className="mb-3">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <label for="exampleInputtext" className="form-label">
                        Name
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        placeholder="Mathew Anderson"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <Button className="btn-primary w-100">Update</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="security">
            <div className="w-100 border position-relative overflow-hidden">
              <div className="p-4">
                <h4>Change Password</h4>
                <form>
                  <div className="mb-3">
                    <label for="current-password" className="form-label">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      className="form-control"
                      id="current-password"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="new-password" className="form-label">
                      New Password
                    </label>
                    <Input
                      type="password"
                      className="form-control"
                      id="new-password"
                    />
                  </div>
                  <div className="mb-4">
                    <label for="confirm-password" className="form-label">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      className="form-control"
                      id="confirm-password"
                    />
                  </div>
                  <Button className="btn-primary w-100">Update</Button>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
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
