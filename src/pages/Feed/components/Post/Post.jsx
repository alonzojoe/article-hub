import Card from "../../../../components/Card";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostEngagements from "./PostEngagements";
const Post = ({ post, toggle, onSelect }) => {
  return (
    <Card>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostEngagements toggle={toggle} post={post} onSelect={onSelect} />
    </Card>
  );
};

export default Post;
