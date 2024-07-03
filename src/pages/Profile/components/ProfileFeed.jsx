import { useEffect } from "react";
import FeedContainer from "../../Feed/components/FeedContainer";
import Post from "../../Feed/components/Post/Post";
import SkeletonPosts from "../../Feed/Skeletons/SkeletonPosts";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../../store/thunks/postsThunks";
const ProfileFeed = ({ userId }) => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch]);

  let errorMessage;
  if (error) {
    console.log(error);
    errorMessage = (
      <p className="text-center text-danger">
        An error occured while fetching data.
      </p>
    );
  }
  return (
    <>
      <FeedContainer>
        {errorMessage}
        {!isLoading ? (
          items.map((post) => (
            <Post
              key={post.id}
              toggle={() => viewComments(post.id)}
              post={post}
              onSelect={() => setSelectedPost(post)}
            />
          ))
        ) : (
          <SkeletonPosts />
        )}
      </FeedContainer>
    </>
  );
};

export default ProfileFeed;
