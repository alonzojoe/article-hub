import React from "react";

import Card from "../../../components/Card";
const SkeletonPost = () => {
  return (
    <Card>
      <div className="d-flex align-items-center gap-3 h5 placeholder-glow">
        <span
          className="placeholder rounded-circle col-7"
          style={{ height: "40px", width: "40px" }}
        ></span>
        <div className="placeholder-glow">
          <span className="placeholder col-3"></span>
          <span className="placeholder col-1"></span>
        </div>
      </div>
      <div className="mx-5">
        <h3>Article Title</h3>
      </div>

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
    </Card>
  );
};

export default SkeletonPost;
