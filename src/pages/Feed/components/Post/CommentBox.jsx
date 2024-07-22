import Avatar from "../../../../components/Avatar";
import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
import useApi from "../../../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getPost } from "../../../../store/thunks/postsThunks";
const CommentBox = ({ postId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSuccess = (data) => {
    toast.success("Comment Added");
    dispatch(getPost(postId));
  };

  const onFailure = (error) => {
    toast.error("Snap :(, Something went wrong");
  };

  const { isLoading, error, callApi } = useApi({
    url: "/cast/comment",
    method: "POST",
    onSuccess,
    onFailure,
  });

  const submitComment = async (data) => {
    console.log("comment", data.comment);

    const formData = {
      article_id: postId,
      text: data.comment,
      user_id: user?.id,
    };

    await callApi(formData);
    reset();
  };

  return (
    <form
      className="d-flex align-items-center gap-3 p-3"
      onSubmit={handleSubmit((data) => submitComment(data))}
    >
      <Avatar
        alt="user-logo"
        className="rounded-circle"
        width="35"
        height="35"
      />
      <Input
        {...register("comment", {
          required: true,
          minLength: {
            value: 1,
            message: "Comment is required",
          },
        })}
        type="text"
        className={`form-control-sm py-8 ${errors.comment ? "is-invalid" : ""}`}
        id="comment-box"
        placeholder={`Comment as ${user?.name}`}
      />
      <button className="btn btn-primary btn" disabled={isSubmitting}>
        Comment
      </button>
    </form>
  );
};

export default CommentBox;
