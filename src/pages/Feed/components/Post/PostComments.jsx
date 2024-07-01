import { useSelector } from "react-redux";
import defaultProfile from "../../../../assets/images/avatars/user-default.jpg";

const PostComments = (props) => {
  const { post } = useSelector((state) => state.posts);
  const userAvatar = post.user.photo_url ?? defaultProfile;
  console.log("comments", post.comments);
  return (
    <div className="position-relative">
      {post.comments &&
        post.comments.map((comment) => (
          <div
            className="px-3 pt-3 pb-2 rounded-2 text-bg-light mb-2"
            key={comment.id}
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={userAvatar}
                alt=""
                className="rounded-circle"
                width="33"
                height="33"
              />
              <h6 className="fw-semibold mb-0 fs-4">{post.user.name}</h6>
              <span className="fs-2">
                <span className="p-1 text-bg-muted rounded-circle d-inline-block"></span>{" "}
                {post.created_at}
              </span>
            </div>
            <p className="my-1">{comment.text}</p>
          </div>
        ))}
    </div>
  );
};

export default PostComments;
