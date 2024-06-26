import Avatar from "../../../../components/Avatar";
import Input from "../../../../components/Input";
const CommentBox = () => {
  return (
    <div className="d-flex align-items-center gap-3 p-3">
      <Avatar
        alt="user-logo"
        className="rounded-circle"
        width="35"
        height="35"
      />
      <Input
        type="text"
        className="form-control-sm py-8"
        id="comment-box"
        placeholder="Comment"
      />
      <button className="btn btn-primary btn">Comment</button>
    </div>
  );
};

export default CommentBox;
