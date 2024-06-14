import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import Post from "./components/Post/Post";
import SkeletonPost from "./Skeletons/SkeletonPost";
const Feed = () => {
  return (
    <>
      <FeedContainer>
        <CreatePost />
        <SkeletonPost />
        {items.map((item) => (
          <Post key={item} />
        ))}
      </FeedContainer>
    </>
  );
};

export default Feed;
