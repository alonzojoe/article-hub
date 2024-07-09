import { useRef } from "react";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import toast from "react-hot-toast";
import useApi from "../../../hooks/useApi";
import Cookie from "cookiejs";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../../utils/storageActions";
import { encryptData } from "../../../utils/enc";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const authSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" })
    .trim()
    .min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const AuthLogin = ({ changeSection }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(authSchema) });

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const onSuccess = (data) => {
    console.log("data success", data);
    const token = data.authorization.token;
    Cookie.set(`${import.meta.env.VITE_AUTH_KEY}`, token, { expires: 365 });
    const encryptUser = encryptData(JSON.stringify(data.user));
    setLocalStorage(import.meta.env.VITE_AUTH_USER, encryptUser);
    reset();
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

  const signInHandler = async (formData) => {
    await callApi({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <form onSubmit={handleSubmit((data) => signInHandler(data))}>
      <div className="mb-3">
        <Label htmlFor="email" className="form-label">
          Email
        </Label>
        <Input
          {...register("email")}
          className={`${errors.email ? "is-invalid" : ""}`}
          type="email"
          id="email"
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="mb-4">
        <Label htmlFor="password" className="form-label">
          Password
        </Label>
        <Input
          {...register("password")}
          className={`${errors.email ? "is-invalid" : ""}`}
          type="password"
          id="password"
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className="d-flex align-items-center justify-content-end mb-4">
        <a className="text-primary fw-medium" href="#">
          Forgot Password ?
        </a>
      </div>
      <Button className="btn-primary w-100 mb-4" disabled={isSubmitting}>
        {isSubmitting ? "Signing In..." : "Sign In"}
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
