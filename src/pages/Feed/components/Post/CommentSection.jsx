import PostComments from "./PostComments";
import CommentBox from "./CommentBox";
import SkeletonComments from "../../Skeletons/SkeletonComments";
import { useSelector } from "react-redux";
const CommentSection = () => {
  const { postLoader } = useSelector((state) => state.posts);
  return <>{postLoader ? <SkeletonComments /> : <PostComments />}</>;
};

export default CommentSection;
