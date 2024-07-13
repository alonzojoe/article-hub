import Avatar from "../../../../components/Avatar";
import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
const CommentBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const submitComment = (data) => {
    console.log("comment", data.comment);
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
        placeholder="Comment"
      />
      <button className="btn btn-primary btn">Comment</button>
    </form>
  );
};

export default CommentBox;
