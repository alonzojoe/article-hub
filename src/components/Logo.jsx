import lightLogo from "../assets/images/logos/light/svg/logo.svg";
import darkLogo from "../assets/images/logos/dark/svg/logo.svg";
import { useSelector } from "react-redux";
const Logo = ({ customWidth, ...props }) => {
  const appTheme = useSelector((state) => state.ui.appTheme);
  const logoWidth = customWidth ? `w-${customWidth}` : ``;
  const combined = `img-fluid ${logoWidth}`.trim("");
  return (
    <img
      src={appTheme === "dark" ? darkLogo : lightLogo}
      style={{ height: "auto", width: "130px" }}
      className={combined}
      {...props}
      alt="logo"
    />
  );
};

export default Logo;
