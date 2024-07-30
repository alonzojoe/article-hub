import { useRef, useEffect } from "react";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const postSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
});

const CreatePost = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [value, toggleValue] = useToggle(false);
  const [selectedFile, previewImg, handleFileUpload, clearUpload] =
    useFileUpload();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const showCreate = () => {
    console.log("create post has been rendered");
    toggleValue(true);
  };

  useEffect(() => {
    if (value) {
      setFocus("title");
    }
  }, [value, setFocus]);

  const inputFileRef = useRef();
  const selectFile = () => {
    inputFileRef.current.click();
  };

  const onClose = () => {
    clearUpload();
    toggleValue(false);
  };

  const submitHandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      if (selectedFile) formData.append("photo", selectedFile);
      formData.append("user_id", user.id);
      await api.post("/article/create", formData, {
        "Content-Type": "multipart/form-data",
      });
      succeed();
    } catch (error) {
      toast.error("Snap!" + error?.response?.data?.message);
    }
  };

  function succeed(data) {
    onClose();
    dispatch(fetchPosts());
    toast.success("Article posted successfully.");
    reset();
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
          <form onSubmit={handleSubmit((data) => submitHandler(data))}>
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
                {...register("title")}
                className={`${errors.title ? "is-invalid" : ""}`}
                type="text"
                placeholder="Article Title"
              />
            </div>
            <div className="mb-3">
              <Textarea
                {...register("content")}
                className={`${errors.content ? "is-invalid" : ""}`}
                placeholder="Write your article content..."
                style={{ height: "140px" }}
                id="postText"
              ></Textarea>
            </div>
            {previewImg && (
              <div className="d-flex justify-content-center rounded bg-dark mb-3 ">
                <img
                  src={previewImg}
                  alt=""
                  className="rounded-4 responsive-preview"
                />
              </div>
            )}
            <Button className="btn-primary w-100" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default CreatePost;
