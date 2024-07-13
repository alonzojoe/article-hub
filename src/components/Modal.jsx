import ReactDOM from "react-dom";
import { useEffect } from "react";
import classes from "./Modal.module.css";

const Backdrop = ({ children }) => {
  return <div className={classes.backdrop}>{children}</div>;
};

const ModalOverlay = ({ children, title, onClose, footer }) => {
  return (
    <Backdrop>
      <div
        className={`${classes["modal-container"]} bg-white rounded position-relative`}
      >
        <span
          className={`${classes["close-btn"]} position-absolute cst-close z-3`}
          onClick={onClose}
        >
          <i className="ti ti-circle-x fs-7"></i>
        </span>
        <div className="position-relative border-bottom px-2 py-2 m-2 mt-2">
          <div className="text-dark h4 px-2 fw-bold text-center">{title}</div>
          <div className={classes["modal-content"]}>{children}</div>
          <div className="text-dark pb-2 px-4">{footer}</div>
        </div>
      </div>
    </Backdrop>
  );
};

const portalOverlay = document.getElementById("overlays");
const Modal = ({ title, onClose, children, footer }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay title={title} footer={footer} onClose={onClose}>
          {children}
        </ModalOverlay>,
        portalOverlay
      )}
    </>
  );
};

export default Modal;
