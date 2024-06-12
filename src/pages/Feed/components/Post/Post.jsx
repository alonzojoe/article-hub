import Card from "../../../../components/Card";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostEngagements from "./PostEngagements";
const Post = () => {
  return (
    <Card>
      <PostHeader />
      <PostBody />
      <PostEngagements />
    </Card>
  );
};

export default Post;
