import classes from "./Loader.module.css";
import reactLogo from "../assets/react.svg";
const Loader = () => {
  return (
    <div className={`bg-white ${classes["bg-loader"]}`}>
      <img
        className={classes["loader-logo"]}
        src={reactLogo}
        width="100"
        height="100"
        alt="loader"
      />
    </div>
  );
};

export default Loader;
