
const PostHeader = () => {
  return (
    <div className="d-flex align-items-center gap-3">
      <img
        src="./assets/images/profile/user-1.jpg"
        alt=""
        className="rounded-circle"
        width="40"
        height="40"
      />
      <h6 className="fw-semibold mb-0 fs-4">Mathew Anderson</h6>
      <span className="fs-2">
        <span className="p-1 text-bg-light rounded-circle d-inline-block"></span> 15
        min ago
      </span>
    </div>
  );
};

export default PostHeader;
