import Button from "../../../../components/Button";
const PostControls = ({ onShow }) => {
  return (
    <div className="d-flex align-items-center gap-6 flex-wrap">
      <div className="hstack align-self-center gap-3">
        <div className="hstack gap-6">
          <a
            className="p-0 hstack justify-content-center round-32 btn btn-primary rounded-circle"
            href="#"
            onClick={onShow}
          >
            <i className="ti ti-photo"></i>
          </a>
          <a href="#" className="text-dark link-primary">
            Photo
          </a>
        </div>
      </div>
      <Button onClick={onShow} className="btn-primary ms-auto">
        Post
      </Button>
    </div>
  );
};

export default PostControls;
