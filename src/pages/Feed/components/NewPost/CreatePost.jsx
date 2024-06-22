import { useRef, useCallback, useState } from "react";
import Card from "../../../../components/Card";
import Textarea from "../../../../components/Textarea";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import PostControls from "./PostControls";
import Modal from "../../../../components/Modal";
import Avatar from "../../../../components/Avatar";
import profile from "../../../../assets/images/avatars/user-5.jpg";
import useToggle from "../../../../hooks/useToggle";
import useFileUpload from "../../../../hooks/useFileUpload";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { fetchPosts } from "../../../../store/thunks/postsThunks";
import api from "../../../../services/api";
const CreatePost = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();
  const { user } = useSelector((state) => state.auth);
  const [value, toggleValue] = useToggle(false);
  const [selectedFile, previewImg, handleFileUpload, clearUpload] =
    useFileUpload();

  const titleRef = useRef();
  const contentRef = useRef("");

  const setTitleRef = useCallback((node) => {
    if (node) {
      node.focus();
    }
    titleRef.current = node;
  }, []);

  const showCreate = () => {
    console.log("create post has been rendered");
    toggleValue(true);
  };

  const inputFileRef = useRef();
  const selectFile = () => {
    inputFileRef.current.click();
  };

  const onClose = () => {
    clearUpload();
    toggleValue(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", titleRef.current.value);
      formData.append("content", contentRef.current.value);
      formData.append("photo", selectedFile);
      formData.append("user_id", user.id);
      await api.post("/article/create", formData, {
        "Content-Type": "multipart/form-data",
      });
      succeed();
    } catch (error) {
      toast.error("Snap!" + error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  function succeed(data) {
    onClose();
    dispatch(fetchPosts());
    toast.success("Article posted successfully.");
  }

  return (
    <>
      <Card className="shadow-none border">
        <div className="d-flex align-items-center gap-3">
          <div className="user-profile-img mb-3">
            <Avatar
              avatar={profile}
              className="rounded-circle"
              width="40"
              height="40"
              alt="user"
            />
          </div>
          <div className="form-floating mb-3 flex-grow-1">
            <Textarea
              className="h-140"
              placeholder="Write your article, Joe.."
              id="postText"
              onFocus={showCreate}
              style={{ resize: "none" }}
            ></Textarea>
            <Label htmlFor="postText">Write your article, Joe...</Label>
          </div>
        </div>

        <PostControls onShow={showCreate} />
      </Card>
      {value && (
        <Modal title="Create Article" onClose={onClose}>
          <hr />
          <form onSubmit={submitHandler}>
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
              <div className="d-flex gap-3  align-items-center">
                <Avatar
                  className="rounded-circle"
                  width="40"
                  height="40"
                  alt="user"
                />
                <h6 className="fw-semibold mb-0 fs-4">Joe</h6>
              </div>

              <div className="hstack gap-6">
                <a
                  className="p-0 hstack justify-content-center round-32 btn btn-primary rounded-circle"
                  onClick={selectFile}
                >
                  <i className="ti ti-photo"></i>
                  <input
                    className="d-none"
                    type="file"
                    ref={inputFileRef}
                    onChange={handleFileUpload}
                    accept=".jpg, .jpeg, .png, .gif, .svg"
                  />
                </a>
              </div>
            </div>
            <div className="mb-3">
              <Input
                ref={setTitleRef}
                type="text"
                placeholder="Article Title"
              />
            </div>
            <div className="mb-3">
              <Textarea
                placeholder="Write your article content..."
                style={{ height: "140px" }}
                ref={contentRef}
                id="postText"
              ></Textarea>
            </div>
            {previewImg && (
              <img
                src={previewImg}
                alt=""
                className="img-fluid rounded-4 w-100 mb-3 object-fit-cover"
                style={{ height: "360px" }}
              />
            )}
            <Button className="btn-primary w-100" disabled={isLoading}>
              {isLoading ? "Posting..." : "Post"}
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default CreatePost;
