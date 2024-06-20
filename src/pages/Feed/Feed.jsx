import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import Post from "./components/Post/Post";
import SkeletonPosts from "./Skeletons/SkeletonPosts";
import { fetchPosts } from "../../store/thunks/postsThunks";
import FeedSpinner from "../../components/FeedSpinner";
const Feed = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchPosts());
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  let errorMessage;
  if (post.error) {
    console.log(post.error);
    errorMessage = (
      <p className="text-center text-danger">
        An error occured while fetching data.
      </p>
    );
  }

  return (
    <>
      {post.isLoading && <FeedSpinner />}
      <FeedContainer>
        <CreatePost />
        {errorMessage}
        {post.isLoading ? (
          <SkeletonPosts />
        ) : (
          post.items.map((post) => <Post key={post.id} post={post} />)
        )}
      </FeedContainer>
    </>
  );
};

export default Feed;
