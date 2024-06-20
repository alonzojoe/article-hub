import Card from "../../../../components/Card";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostEngagements from "./PostEngagements";
const Post = ({ post }) => {
  return (
    <Card>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostEngagements post={post} />
    </Card>
  );
};

export default Post;
