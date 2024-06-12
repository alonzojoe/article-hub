import lightLogo from "../assets/images/logos/light/svg/logo.svg";
const Logo = ({ customWidth, ...props }) => {
  const logoWidth = customWidth ? `w-${customWidth}` : ``;
  const combined = `img-fluid ${logoWidth}`.trim("");
  return (
    <img
      src={lightLogo}
      style={{ height: "auto", width: "130px" }}
      className={combined}
      {...props}
      alt="logo"
    />
  );
};

export default Logo;
