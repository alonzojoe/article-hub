import React from "react";

const SkeletonComments = () => {
  return (
    <>
      <div className="position-relative">
        <div className="p-4 rounded-2 text-bg-light mb-3">
          <div className="d-flex align-items-center gap-3 h5 placeholder-glow">
            <span
              className="placeholder rounded-circle col-7"
              style={{ height: "40px", width: "40px" }}
            ></span>

            <span className="placeholder rounded col-4"></span>
          </div>
          <div className="mt-0 placeholder-glow mb-2">
            <span className="placeholder rounded col-12"></span>
            <span className="placeholder rounded col-12"></span>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="p-4 rounded-2 text-bg-light mb-3">
          <div className="d-flex align-items-center gap-3 h5 placeholder-glow">
            <span
              className="placeholder rounded-circle col-7"
              style={{ height: "40px", width: "40px" }}
            ></span>

            <span className="placeholder rounded col-4"></span>
          </div>
          <div className="mt-0 placeholder-glow mb-2">
            <span className="placeholder rounded col-12"></span>
            <span className="placeholder rounded col-12"></span>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="p-4 rounded-2 text-bg-light mb-3">
          <div className="d-flex align-items-center gap-3 h5 placeholder-glow">
            <span
              className="placeholder rounded-circle col-7"
              style={{ height: "40px", width: "40px" }}
            ></span>

            <span className="placeholder rounded col-4"></span>
          </div>
          <div className="mt-0 placeholder-glow mb-2">
            <span className="placeholder rounded col-12"></span>
            <span className="placeholder rounded col-12"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonComments;
