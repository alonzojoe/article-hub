import Logo from "../../../components/Logo";
import darkImage from "../../../assets/images/logos/light/big-light.png";
import lightImage from "../../../assets/images/logos/dark/big-dark.png";
import { useSelector } from "react-redux";
const AuthImages = () => {
  const { appTheme } = useSelector((state) => state.ui);

  return (
    <div className="col-xl-7 col-xxl-8">
      <a className="text-nowrap logo-img d-block px-4 py-9 w-100">
        <Logo customWidth="30" />
      </a>
      <div
        className="d-none d-xl-flex align-items-center justify-content-center"
        style={{ height: "calc(100vh - 120px)" }}
      >
        <img
          src={appTheme === "dark" ? darkImage : lightImage}
          alt="main-logo"
          className="img-fluid"
          width="500"
        />
      </div>
    </div>
  );
};

export default AuthImages;
