import React from "react";

import Card from "../../../components/Card";
const SkeletonPost = () => {
  return (
    <Card>
      <div className="d-flex align-items-center gap-3">
        <img
          src="./assets/images/profile/user-1.jpg"
          alt=""
          className="rounded-circle"
          width="40"
          height="40"
        />
        <span
          className="placeholder placeholder-glow rounded-circle col-7"
          style={{ height: "40px", width: "40px" }}
        ></span>
        <h6 className="fw-semibold mb-0 fs-4">Skeleton Anderson</h6>

        <span className="fs-2">
          <span className="p-1 text-bg-light rounded-circle d-inline-block"></span>{" "}
          15 min ago
        </span>
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
