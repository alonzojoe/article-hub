import { useRef } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import defaultProfile from "../../../assets/images/avatars/user-default.jpg";
import useFileUpload from "../../../hooks/useFileUpload";
const UpdateProfile = () => {
  const [selectedFile, previewImg, handleFileUpload, clearUpload] =
    useFileUpload();

  const inputFileRef = useRef();

  const selectFile = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="profile">
      <div className="w-100 border position-relative overflow-hidden">
        <div className="p-4">
          <h4>Update Profile</h4>
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
                  type="text"
                  className="form-control"
                  id="profile-name"
                  placeholder="Mathew Anderson"
                />
              </div>
            </div>
            <div className="col-12">
              <Button className="btn-primary w-100">Update</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
