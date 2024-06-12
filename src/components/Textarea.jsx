import React from "react";

const Textarea = ({ className, ...props }) => {
  const defaultClassName = "form-control";
  const customClass = `${defaultClassName} ${className || ""}`.trim();
  return <textarea className={customClass} {...props}></textarea>;
};

export default Textarea;
