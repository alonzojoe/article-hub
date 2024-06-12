import React from "react";
import Logo from "../../components/Logo";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthContainer from "./components/AuthContainer";
import Card from "../../components/Card";

const Auth = () => {
  return (
    <>
      <AuthContainer>
        <Card className="mb-0">
          <Logo />
          <form>
            <div className="mb-3">
              <Label htmlFor="email" className="form-label">
                Username
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="form-label">
                Password
              </Label>
              <Input type="password" id="password" />
            </div>
            <div className="d-flex align-items-center justify-content-end mb-4">
              <a className="text-primary fw-medium" href="#">
                Forgot Password ?
              </a>
            </div>
            <Button className="btn-primary w-100 mb-4">Sign In</Button>
            <div className="d-flex align-items-center justify-content-center">
              <p className="fs-4 mb-0 fw-medium">New to ArticleHub?</p>
              <a className="text-primary fw-medium ms-2" href="#">
                Create an account
              </a>
            </div>
          </form>
        </Card>
      </AuthContainer>
    </>
  );
};

export default Auth;
