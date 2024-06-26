import Card from "../../../../components/Card";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostEngagements from "./PostEngagements";
import CommentSection from "./CommentSection";
const Post = ({ post, toggle, onSelect }) => {
  return (
    <Card>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostEngagements toggle={toggle} post={post} onSelect={onSelect} />
      <CommentSection />
    </Card>
  );
};

export default Post;
