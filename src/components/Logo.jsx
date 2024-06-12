import lightLogo from "../assets/images/logos/light/svg/logo.svg";
const Logo = () => {
  return (
    <a href="#" className="text-nowrap logo-img text-center d-block mb-4 w-100">
      {/* <img src={darkLogo} clasName="dark-logo" alt="Logo-Dark" /> */}
      <img src={lightLogo} className="img-fluid w-50" alt="logo" />
    </a>
  );
};

export default Logo;
