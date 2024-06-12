import { useRef } from "react";
import Card from "../../../../components/Card";
import Textarea from "../../../../components/Textarea";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import PostControls from "./PostControls";
import Modal from "../../../../components/Modal";
import Avatar from "../../../../components/Avatar";
import profile from "../../../../assets/images/avatars/user-5.jpg";
import useToggle from "../../../../hooks/useToggle";
const CreatePost = () => {
  const [value, toggleValue] = useToggle(false);
  const feedRef = useRef();
  const showCreate = () => {
    toggleValue(true);
    feedRef.current.blur();
  };

  return (
    <>
      <Card className="shadow-none border">
        <div className="d-flex align-items-center gap-3">
          <div className="user-profile-img mb-3">
            <Avatar
              avatar={profile}
              className="rounded-circle"
              width="40"
              height="40"
              alt="user"
            />
          </div>
          <div className="form-floating mb-3 flex-grow-1">
            <Textarea
              ref={feedRef}
              className="h-140"
              placeholder="Leave a comment here"
              id="postText"
              onClick={() => toggleValue(true)}
            ></Textarea>
            <Label htmlFor="postText">Share your article...</Label>
          </div>
        </div>

        <PostControls onShow={showCreate} />
      </Card>
      {value && (
        <Modal title="Create Post" onClose={() => toggleValue(false)}>
          <hr />
          <div className="d-flex align-items-center gap-3 mb-3">
            <Avatar
              avatar={profile}
              className="rounded-circle"
              width="40"
              height="40"
              alt="user"
            />
            <h6 className="fw-semibold mb-0 fs-4">Joenell Alonzo</h6>
          </div>
          <div className="mb-3">
            <Input type="text" placeholder="Article Title" />
          </div>
          <div className="mb-3">
            <Textarea
              placeholder="Write your article content..."
              style={{ height: "140px" }}
              id="postText"
            ></Textarea>
            {/* <Label htmlFor="postText">Share your article...</Label> */}
          </div>
          <Button className="btn-primary w-100">Post</Button>
        </Modal>
      )}
    </>
  );
};

export default CreatePost;
