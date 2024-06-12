import { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  const defaultClassName = "form-control";
  const customClass = `${defaultClassName} ${className || ""}`.trim();
  return <textarea ref={ref} className={customClass} {...restProps}></textarea>;
});

export default Textarea;
