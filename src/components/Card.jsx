import React from "react";

const Card = ({ className, children }) => {
  const defaultClassName = "card";
  const combinedClass = `${defaultClassName} ${className || ""}`.trim();
  return (
    <div className={combinedClass}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
