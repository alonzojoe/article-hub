import { useRef } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import defaultProfile from "../../../assets/images/avatars/user-default.jpg";
import useFileUpload from "../../../hooks/useFileUpload";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { setLocalStorage } from "../../../utils/storageActions";
import { encryptData } from "../../../utils/enc";
import api from "../../../services/api";
const UpdateProfile = ({ user }) => {
  const [selectedFile, previewImg, handleFileUpload, clearUpload] =
    useFileUpload();

  const inputFileRef = useRef();

  const selectFile = () => {
    inputFileRef.current.click();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: user?.name || "",
    },
  });

  const formSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("profile", selectedFile);
      formData.append("_method", "PATCH");

      const response = await api.post(`/auth/update/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUpdatedUser(response.data.user);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("An error occured");
    } finally {
      reset();
      window.location.reload();
    }
  };

  const setUpdatedUser = (user) => {
    const updatedUser = encryptData(JSON.stringify(user));
    setLocalStorage(import.meta.env.VITE_AUTH_USER, updatedUser);
  };

  const getProfileImageSrc = () => {
    console.log("user", user);
    if (previewImg) return previewImg;

    if (user.profile_url) return user.profile_url;

    return defaultProfile;
  };

  return (
    <div className="profile">
      <div className="w-100 border position-relative overflow-hidden">
        <div className="p-4">
          <h4>Update Profile</h4>
          <form onSubmit={handleSubmit((data) => formSubmit(data))}>
            <div className="text-center">
              <img
                src={getProfileImageSrc()}
                alt="modernize-img"
                className="img-fluid rounded-circle"
                width="120"
                height="120"
              />
              <input
                type="file"
                ref={inputFileRef}
                onChange={handleFileUpload}
                className="d-none"
              />
              <div className="d-flex align-items-center justify-content-center my-4 gap-6">
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={selectFile}
                >
                  Upload
                </Button>
                <Button
                  type="button"
                  className="btn bg-danger-subtle text-danger"
                  onClick={clearUpload}
                >
                  Reset
                </Button>
              </div>
              <p className="mb-3">Allowed JPG, GIF or PNG. Max size of 800K</p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="mb-4">
                  <label htmlFor="profile-name" className="form-label">
                    Name
                  </label>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Must be at least 3 characters long",
                      },
                    })}
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="profile-name"
                  />
                  <div className="invalid-feedback">
                    {errors?.name?.message}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Button className="btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? "Updating Profile..." : "Update Profile"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
