import React from "react";

const FeedContainer = ({ children }) => {
  return (
    <div className="tab-content pt-3">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  );
};

export default FeedContainer;
