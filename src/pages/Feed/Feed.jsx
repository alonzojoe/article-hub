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
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
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

  const viewComments = (id) => {
    console.log("view comment", id);
    toggle(true);
  };

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
        {!post.isLoading ? (
          post.items.map((post) => (
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

export default Feed;
