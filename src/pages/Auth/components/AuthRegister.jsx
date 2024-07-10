import { useState, useCallback } from "react";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { toast } from "react-hot-toast";
import useApi from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registrySchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(3, "Name at least 3 characters long"),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    password: z.string().min(6, "Must be at least 6 characters long"),
    confirm: z.string().min(6, "Must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

const AuthRegister = ({ changeSection }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registrySchema),
  });

  const onSuccess = useCallback(
    (data) => {
      toast.success("Account Created Successfully! Please Proceed to login.");
      changeSection(false);
      reset();
    },
    [changeSection]
  );

  const onFailure = useCallback((error) => {
    toast.error(`${error.response?.data?.message || error.message}`);
  }, []);

  const { isLoading, error, callApi } = useApi({
    url: "/auth/register",
    method: "POST",
    onSuccess,
    onFailure,
  });

  // const singupHandler = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     console.log("fomr submitted");
  //     await callApi(formData);
  //   },
  //   [formData, callApi]
  // );

  const singupHandler = async (formData) => {
    console.log("fomrData", formData);
    await callApi(formData);
  };

  return (
    <>
      <h3 className="text-center mt-4 mb-3">Account Registration</h3>
      <form onSubmit={handleSubmit((data) => singupHandler(data))}>
        <div className="mb-3">
          <div className="form-group">
            <Label htmlFor="rname" className="form-label">
              Name
            </Label>
            <Input
              {...register("name")}
              className={`${errors.name ? "is-invalid" : ""}`}
              type="text"
              name="name"
              id="rname"
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="remail" className="form-label">
            Email
          </Label>
          <Input
            {...register("email")}
            className={`${errors.email ? "is-invalid" : ""}`}
            type="email"
            id="remail"
            name="email"
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mb-4">
          <Label htmlFor="rpassword" className="form-label">
            Password
          </Label>
          <Input
            {...register("password")}
            className={`${errors.password ? "is-invalid" : ""}`}
            type="password"
            id="rpassword"
            name="password"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="mb-4">
          <Label htmlFor="rconf" className="form-label">
            Confirm Password
          </Label>
          <Input
            {...register("confirm")}
            className={`${errors.confirm ? "is-invalid" : ""}`}
            type="password"
            id="rconf"
            name="confirm"
          />
          <div className="invalid-feedback">{errors.confirm?.message}</div>
        </div>
        <div className="d-flex align-items-center justify-content-end mb-4">
          <a
            className="text-primary fw-medium"
            onClick={() => changeSection(false)}
          >
            Proceed to Login
          </a>
        </div>
        <Button className="btn-primary w-100 mb-4" disabled={isSubmitting}>
          {isSubmitting ? "Singing Up..." : "Sign Up"}
        </Button>
      </form>
    </>
  );
};

export default AuthRegister;
