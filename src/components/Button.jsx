import React from "react";

const Button = ({ className, children, ...props }) => {
  const defaultClassName = "btn";

  const combined = `${defaultClassName} ${className || ""}`.trim();

  return <button className={combined}>{children}</button>;
};

export default Button;
