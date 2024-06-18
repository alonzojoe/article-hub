import { useRef, useCallback } from "react";
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
  const postTitle = useRef();

  const setPostTitleRef = useCallback((node) => {
    if (node) {
      node.focus();
    }
    postTitle.current = node;
  }, []);

  const showCreate = () => {
    console.log("create post has been rendered");
    toggleValue(true);
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
              className="h-140"
              placeholder="Write your article, Joe.."
              id="postText"
              onFocus={showCreate}
            ></Textarea>
            <Label htmlFor="postText">Write your article, Joe...</Label>
          </div>
        </div>

        <PostControls onShow={showCreate} />
      </Card>
      {value && (
        <Modal title="Create Article" onClose={() => toggleValue(false)}>
          <hr />
          <div className="d-flex align-items-center gap-3 mb-3">
            <Avatar
              className="rounded-circle"
              width="40"
              height="40"
              alt="user"
            />
            <h6 className="fw-semibold mb-0 fs-4">Joe</h6>
          </div>
          <div className="mb-3">
            <Input
              ref={setPostTitleRef}
              type="text"
              placeholder="Article Title"
            />
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