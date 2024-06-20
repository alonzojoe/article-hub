import React from "react";

const Label = ({ className, children, ...props }) => {
  const defaultClass = "form-label";
  const combinedClass = `${defaultClass} ${className || ""}`.trim();
  return (
    <label {...props} className={combinedClass}>
      {children}
    </label>
  );
};

export default Label;
