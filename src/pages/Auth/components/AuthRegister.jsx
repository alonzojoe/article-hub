import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const AuthRegister = ({ changeSection }) => {
  return (
    <>
      <h3 className="text-center mb-3">Account Registration</h3>
      <form>
        <div className="mb-3">
          <Label htmlFor="remail" className="form-label">
            Name
          </Label>
          <Input type="email" id="remail" />
        </div>
        <div className="mb-4">
          <Label htmlFor="remail" className="form-label">
            Email
          </Label>
          <Input type="email" id="remail" />
        </div>
        <div className="mb-4">
          <Label htmlFor="rpassword" className="form-label">
            Password
          </Label>
          <Input type="rpassword" id="password" />
        </div>
        <div className="mb-4">
          <Label htmlFor="rconf" className="form-label">
            Password
          </Label>
          <Input type="rconf" id="password" />
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
