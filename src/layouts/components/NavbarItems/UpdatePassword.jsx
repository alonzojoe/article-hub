import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../../services/api";
const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "Must be at least 6 characters long"),
    newPassword: z.string().min(6, "Must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

const UpdatePassword = ({ user, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      await api.patch(`/auth/change/${user.id}`, {
        old_password: data.currentPassword,
        new_password: data.newPassword,
      });
      toast.success("Password changed successfully");
      reset();
      onClose(false);
    } catch (error) {
      console.log(error);
      toast.error(`${error?.response?.data?.message}`);
      reset();
    }
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
                {...register("currentPassword")}
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
                {...register("newPassword")}
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
                {...register("confirmPassword")}
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
