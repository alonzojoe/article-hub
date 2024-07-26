import defaultProfile from "../../../../assets/images/avatars/user-default.jpg";
import { useSelector } from "react-redux";
const PostHeader = ({ post }) => {
  console.log("postheader", post);
  const { user } = useSelector((state) => state.auth);

  const postAvatar = post?.user?.profile_url || defaultProfile;
  return (
    <div className="d-flex align-items-center justify-content-between">
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
      {user?.id === post?.user_id && (
        <div className="dropdown">
          <a
            className="show"
            id="m1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical fs-4"></i>
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="m1"
            data-popper-placement="bottom-start"
            style={{
              position: "absolute",
              inset: "0px 0px auto auto",
              margin: "0px",
              transform: "translate(0px, 21px)",
            }}
          >
            <li>
              <a className="dropdown-item">
                <i className="ti ti-trash text-danger me-1 fs-5"></i>
                <span className="text-danger">Delete</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostHeader;
