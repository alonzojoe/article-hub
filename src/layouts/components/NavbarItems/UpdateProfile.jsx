import { useRef } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import defaultProfile from "../../../assets/images/avatars/user-default.jpg";
import useFileUpload from "../../../hooks/useFileUpload";
import { useForm } from "react-hook-form";
const UpdateProfile = () => {
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
  } = useForm();

  const formSubmit = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("formData", formData);
  };

  return (
    <div className="profile">
      <div className="w-100 border position-relative overflow-hidden">
        <div className="p-4">
          <h4>Update Profile</h4>
          <form onSubmit={handleSubmit((data) => formSubmit(data))}>
            <div className="text-center">
              <img
                src={previewImg ? previewImg : defaultProfile}
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
                <button className="btn btn-primary" onClick={selectFile}>
                  Upload
                </button>
                <button
                  className="btn bg-danger-subtle text-danger"
                  onClick={clearUpload}
                >
                  Reset
                </button>
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
                    placeholder="Mathew Anderson"
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
