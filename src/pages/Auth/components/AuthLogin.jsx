import { useRef } from "react";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import toast from "react-hot-toast";
import useApi from "../../../hooks/useApi";
import Cookie from "cookiejs";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../../utils/storageActions";

const AuthLogin = ({ changeSection }) => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const onSuccess = (data) => {
    console.log("data success", data);
    const token = data.authorization.token;
    Cookie.set(`${import.meta.env.VITE_AUTH_KEY}`, token, { expires: 365 });
    setLocalStorage(import.meta.env.VITE_AUTH_KEY, token);
    email.current.value = "";
    password.current.value = "";
    navigate("/");
  };

  const onFailure = (error) => {
    toast.error(`${error.response?.data?.message || error.message}`);
  };

  const { isLoading, error, callApi } = useApi({
    url: "/auth/login",
    method: "post",
    onSuccess,
    onFailure,
  });

  const signInHandler = async (e) => {
    e.preventDefault();
    await callApi({
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <form onSubmit={signInHandler}>
      <div className="mb-3">
        <Label htmlFor="email" className="form-label">
          Email
        </Label>
        <Input type="email" ref={email} id="email" required />
      </div>
      <div className="mb-4">
        <Label htmlFor="password" className="form-label">
          Password
        </Label>
        <Input type="password" ref={password} id="password" required />
      </div>
      <div className="d-flex align-items-center justify-content-end mb-4">
        <a className="text-primary fw-medium" href="#">
          Forgot Password ?
        </a>
      </div>
      <Button className="btn-primary w-100 mb-4" disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
      <div className="d-flex align-items-center justify-content-center">
        <p className="fs-4 mb-0 fw-medium">New to ArticleHub?</p>
        <a
          className="text-primary fw-medium ms-2"
          onClick={() => changeSection(true)}
        >
          Create an account
        </a>
      </div>
    </form>
  );
};

export default AuthLogin;
