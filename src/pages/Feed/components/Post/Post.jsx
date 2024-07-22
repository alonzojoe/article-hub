import Card from "../../../../components/Card";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostEngagements from "./PostEngagements";
const Post = ({ targetClass, post, toggle, onSelect }) => {
  return (
    <Card className={targetClass}>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostEngagements toggle={toggle} post={post} onSelect={onSelect} />
    </Card>
  );
};

export default Post;
