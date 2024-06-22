import user from "../../../../assets/images/avatars/react.png";
import defaultProfile from "../../../../assets/images/avatars/user-default.jpg";
const PostHeader = ({ post }) => {
  console.log("postheader", post);

  const postAvatar = post?.user?.profile_url || defaultProfile;
  return (
    <div className="d-flex align-items-center gap-3">
      <img
        src={postAvatar}
        alt=""
        className="rounded-circle"
        width="40"
        height="40"
      />
      <h6 className="fw-semibold mb-0 fs-4">{post.user.name}</h6>
      <span className="fs-2">
        <span className="p-1 text-bg-light rounded-circle d-inline-block"></span>
        {"  "}
        {post.created_at}
      </span>
    </div>
  );
};

export default PostHeader;
