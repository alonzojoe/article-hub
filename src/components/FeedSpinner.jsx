import ReactDOM from "react-dom";

const Spinner = () => {
  return (
    <div className="feed-spinner-container d-flex justify-content-center position-fixed w-100">
      <div className="feed-spinner p-2 shadow">
        <div
          className="spinner-border fs-4"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const FeedSpinner = () => {
  return <>{ReactDOM.createPortal(<Spinner />, portalElement)}</>;
};

export default FeedSpinner;
