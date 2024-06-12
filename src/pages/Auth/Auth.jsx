import React from "react";
import darkLogo from "../../assets/images/logos/dark/svg/logo.svg";
import lightLogo from "../../assets/images/logos/light/svg/logo.svg";
import Label from "../../components/Label";
import Input from "../../components/Input";

const Auth = () => {
  return (
    <>
      <div id="main-wrapper" className="auth-customizer-none">
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3 auth-card">
                <div className="card mb-0">
                  <div className="card-body">
                    <a
                      href="#"
                      className="text-nowrap logo-img text-center d-block mb-4 w-100"
                    >
                      {/* <img src={darkLogo} clasName="dark-logo" alt="Logo-Dark" /> */}
                      <img
                        src={lightLogo}
                        className="img-fluid w-50"
                        alt="logo"
                      />
                    </a>
                    <form>
                      <div className="mb-3">
                        <Label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Username
                        </Label>
                        <Input
                          type="email"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-4">
                        <Label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </Label>
                        <Input type="password" id="exampleInputPassword1" />
                      </div>
                      <div className="d-flex align-items-center justify-content-end mb-4">
                        <a className="text-primary fw-medium" href="#">
                          Forgot Password ?
                        </a>
                      </div>
                      <a
                        href="#"
                        className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      >
                        Sign In
                      </a>
                      <div className="d-flex align-items-center justify-content-center">
                        <p className="fs-4 mb-0 fw-medium">
                          New to ArticleHub?
                        </p>
                        <a className="text-primary fw-medium ms-2" href="#">
                          Create an account
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
