import defaultProfile from "../../../../assets/images/avatars/user-default.jpg";
import { useSelector, useDispatch } from "react-redux";
import { encryptData } from "../../../../utils/enc";
import { useNavigate } from "react-router-dom";
import { postActions } from "../../../../store/slices/postSlice";
import toast from "react-hot-toast";
import useApi from "../../../../hooks/useApi";
const PostHeader = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewProfile = (id) => {
    const user = encodeURIComponent(encryptData(id));
    console.log(user);
    navigate(`/profile/${user}`);
  };

  const postAvatar = post?.user?.profile_url || defaultProfile;

  const onSuccess = (data) => {
    toast.success("Article has been deleted!");
  };

  const onFailure = () => {
    toast.error("An error occured.");
  };

  const { isLoading, error, callApi } = useApi({
    url: `/article/${post.id}`,
    method: "DELETE",
    onSuccess,
    onFailure,
  });

  const deleteHandler = async () => {
    callApi();
    dispatch(postActions.removePost({ post }));
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <img
          src={postAvatar}
          alt=""
          className="rounded-circle cursor-pointer"
          width="40"
          height="40"
          onClick={() => viewProfile(post?.user?.id)}
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
              <a className="dropdown-item" onClick={deleteHandler}>
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
