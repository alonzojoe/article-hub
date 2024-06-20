import { forwardRef } from "react";
const Input = forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  const defaultClassName = "form-control";

  const combined = `${defaultClassName} ${className || ""}`.trim();

  return <input ref={ref} className={combined} {...restProps} />;
});

export default Input;
