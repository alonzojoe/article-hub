const Input = ({ className, ...props }) => {
  const defaultClassName = "form-control";

  const combined = `${defaultClassName} ${className || ""}`.trim();

  return <input className={combined} {...props} />;
};

export default Input;
