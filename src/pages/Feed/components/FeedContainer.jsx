import React from "react";

const FeedContainer = ({ children }) => {
  return (
    <div classNameName="tab-content">
      <div classNameName="row">
        <div classNameName="col-12">{children}</div>
      </div>
    </div>
  );
};

export default FeedContainer;
