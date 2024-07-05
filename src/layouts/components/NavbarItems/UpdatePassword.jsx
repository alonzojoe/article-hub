import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("credentials", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Password changed successfully");
    reset();
  };

  return (
    <div className="security">
      <div className="w-100 border position-relative overflow-hidden">
        <div className="p-4">
          <h4>Change Password</h4>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className="mt-4"
          >
            <div className="mb-3">
              <label htmlFor="current-password" className="form-label">
                Current Password
              </label>
              <Input
                {...register("currentPassword", {
                  required: "Current Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters long",
                  },
                })}
                type="password"
                className={`form-control ${
                  errors.currentPassword ? "is-invalid" : ""
                }`}
                id="current-password"
              />
              {errors.currentPassword && (
                <div className="invalid-feedback">
                  {errors.currentPassword.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="new-password" className="form-label">
                New Password
              </label>
              <Input
                {...register("newPassword", {
                  required: "New Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters long",
                  },
                })}
                type="password"
                className={`form-control ${
                  errors.newPassword ? "is-invalid" : ""
                }`}
                id="new-password"
              />
              {errors.newPassword && (
                <div className="invalid-feedback">
                  {errors.newPassword.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <Input
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters long",
                  },
                  validate: (value) =>
                    value === getValues("newPassword") ||
                    "Passwords must match",
                })}
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirm-password"
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <Button className="btn-primary w-100" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
