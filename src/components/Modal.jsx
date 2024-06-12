import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ children }) => {
  return <div className={classes.backdrop}>{children}</div>;
};

const ModalOverlay = ({ children, title, onClose }) => {
  return (
    <Backdrop>
      <div
        className={`${classes["modal-container"]} bg-white rounded position-relative`}
      >
        <span
          className={`${classes["close-btn"]} position-absolute cst-close`}
          onClick={onClose}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <div className="position-relative border p-2 m-2 mt-4">
          <div
            className="position-absolute bg-primary text-white px-2"
            style={{ top: "-13px", left: "5px" }}
          >
            {title}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </Backdrop>
  );
};

const portalOverlay = document.getElementById("overlays");
const Modal = ({ title, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay title={title} onClose={onClose} />,
        portalOverlay
      )}
    </>
  );
};

export default Modal;
