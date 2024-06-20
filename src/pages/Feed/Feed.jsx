import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import Post from "./components/Post/Post";
import SkeletonPosts from "./Skeletons/SkeletonPosts";
import { fetchPosts } from "../../store/thunks/postsThunks";
import FeedSpinner from "../../components/FeedSpinner";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";
const Feed = () => {
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
  const post = useSelector((state) => state.posts);
  const viewPostTitle = `${selectedPost?.user?.name}'s Post`;
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
      {value && (
        <Modal title={viewPostTitle} onClose={() => toggle(false)}>
          <Post post={selectedPost} />
        </Modal>
      )}
      <FeedContainer>
        <CreatePost />
        {errorMessage}
        {post.isLoading ? (
          <SkeletonPosts />
        ) : (
          post.items.map((post) => (
            <Post
              key={post.id}
              toggle={toggle}
              post={post}
              onSelect={() => setSelectedPost(post)}
            />
          ))
        )}
      </FeedContainer>
    </>
  );
};

export default Feed;
