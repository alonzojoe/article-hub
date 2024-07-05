import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
const UpdatePassword = () => {
  return (
    <div className="security">
      <div className="w-100 border position-relative overflow-hidden">
        <div className="p-4">
          <h4>Change Password</h4>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="current-password" className="form-label">
                Current Password
              </label>
              <Input
                type="password"
                className="form-control"
                id="current-password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="new-password" className="form-label">
                New Password
              </label>
              <Input
                type="password"
                className="form-control"
                id="new-password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="form-label">
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
  );
};

export default UpdatePassword;
