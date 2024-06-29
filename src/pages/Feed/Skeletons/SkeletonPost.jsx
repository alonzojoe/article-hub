import Card from "../../../components/Card";
import SkeletonComments from "./SkeletonComments";
const SkeletonPost = () => {
  return (
    <Card>
      <div className="d-flex align-items-center gap-3 h5 placeholder-glow">
        <span
          className="placeholder rounded-circle col-7"
          style={{ height: "40px", width: "40px" }}
        ></span>

        <span className="placeholder rounded col-4"></span>
      </div>

      <h3 className="mt-3  placeholder-glow">
        <span className="placeholder rounded col-6"></span>
      </h3>
      <div className="mt-0 placeholder-glow mb-2">
        <span className="placeholder rounded col-12"></span>
        <span className="placeholder rounded col-12"></span>
        <span className="placeholder rounded col-12"></span>
        <span className="placeholder rounded col-11"></span>
        <span className="col-1">.......</span>
      </div>

      <div className="mt-0 placeholder-glow">
        <span
          className="placeholder rounded col-12"
          style={{ height: "150px" }}
        ></span>
      </div>

      <div className="d-flex align-items-center my-3">
        <div className="d-flex align-items-center gap-2 placeholder-glow">
          <span
            className="placeholder rounded-circle col-7 bg-primary"
            style={{ height: "31px", width: "31px" }}
          ></span>

          <span className="placeholder rounded col-6"></span>
        </div>
        <div className="d-flex align-items-center gap-2 ms-4  placeholder-glow">
          <span
            className="placeholder rounded-circle col-7 bg-info"
            style={{ height: "31px", width: "31px" }}
          ></span>
          <span className="placeholder rounded col-6"></span>
        </div>
      </div>
      <SkeletonComments />
    </Card>
  );
};

export default SkeletonPost;
