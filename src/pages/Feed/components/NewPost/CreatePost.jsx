import Card from "../../../../components/Card";
import Textarea from "../../../../components/Textarea";
import Label from "../../../../components/Label";
import PostControls from "./PostControls";
import Avatar from "../../../../components/Avatar";
import profile from "../../../../assets/images/avatars/user-5.jpg";
const CreatePost = () => {
  return (
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
            placeholder="Leave a comment here"
            id="postText"
          ></Textarea>
          <Label htmlFor="postText">Share your article...</Label>
        </div>
      </div>

      <PostControls />
    </Card>
  );
};

export default CreatePost;
