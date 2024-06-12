const PostEngagements = () => {
  return (
    <div className="d-flex align-items-center my-3">
      <div className="d-flex align-items-center gap-2">
        <a
          className="d-flex align-items-center justify-content-center text-bg-primary p-2 fs-4 rounded-circle"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Like"
        >
          <i className="ti ti-thumb-up"></i>
        </a>
        <span className="text-dark fw-semibold">67</span>
      </div>
      <div className="d-flex align-items-center gap-2 ms-4">
        <a
          className="d-flex align-items-center justify-content-center text-bg-secondary p-2 fs-4 rounded-circle"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Comment"
        >
          <i className="ti ti-message-2"></i>
        </a>
        <span className="text-dark fw-semibold">2</span>
      </div>
      <a
        className="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Share"
      >
        <i className="ti ti-share"></i>
      </a>
    </div>
  );
};

export default PostEngagements;
