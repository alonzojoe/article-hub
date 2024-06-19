import { useState, useCallback } from "react";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import api from "../../../services/api";

const registryState = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

const AuthRegister = ({ changeSection }) => {
  const [formData, setFormData] = useState(registryState);
  console.log("auth register is reevaluted");

  const changeHandler = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const singupHandler = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("fomr submitted");
      try {
        await api.post("/auth/register", {
          ...formData,
        });
      } catch (error) {
        console.log("e", error.response.data);
        console.log(
          Object.values(error.response.data.errors).forEach((error) =>
            console.log(error[0])
          )
        );
      }
    },
    [formData]
  );

  return (
    <>
      <h3 className="text-center mb-3">Account Registration</h3>
      {JSON.stringify(formData)}
      <form onSubmit={singupHandler}>
        <div className="mb-3">
          <div className="form-group">
            <Label htmlFor="rname" className={`form-label text-danger`}>
              Name
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={changeHandler}
              className="is-invalid"
              name="name"
              id="rname"
            />
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="remail" className="form-label">
            Email
          </Label>
          <Input
            type="email"
            value={formData.email}
            onChange={changeHandler}
            id="remail"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="rpassword" className="form-label">
            Password
          </Label>
          <Input
            type="password"
            value={formData.password}
            onChange={changeHandler}
            id="rpassword"
            name="password"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="rconf" className="form-label">
            Confirm Password
          </Label>
          <Input
            type="password"
            value={formData.confirm}
            onChange={changeHandler}
            id="rconf"
            name="confirm"
            required
          />
        </div>
        <div className="d-flex align-items-center justify-content-end mb-4">
          <a
            className="text-primary fw-medium"
            onClick={() => changeSection(false)}
          >
            Proceed to Login
          </a>
        </div>
        <Button className="btn-primary w-100 mb-4">Sign Up</Button>
      </form>
    </>
  );
};

export default AuthRegister;
