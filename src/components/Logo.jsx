import lightLogo from "../assets/images/logos/dark/dark-logo.png";
import darkLogo from "../assets/images/logos/light/light-logo.png";
import { useSelector } from "react-redux";
const Logo = ({ customWidth, ...props }) => {
  const appTheme = useSelector((state) => state.ui.appTheme);
  const logoWidth = customWidth ? `w-${customWidth}` : ``;
  const combined = `img-fluid ${logoWidth}`.trim("");

  console.log("appTheme in navbar", appTheme);
  return (
    <img
      src={appTheme === "dark" ? darkLogo : lightLogo}
      style={{ height: "auto", width: "200px" }}
      className={combined}
      {...props}
      alt="logo"
    />
  );
};

export default Logo;
