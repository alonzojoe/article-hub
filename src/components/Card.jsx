import React from "react";

const Card = ({ className, children }) => {
  const defaultClassName = "card";
  const combinedClass = `${defaultClassName} ${className || ""}`.trim();
  return (
    <div className={combinedClass}>
      <div className="card-body border-bottom">{children}</div>
    </div>
  );
};

export default Card;
