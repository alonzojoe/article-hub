import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
import SelectedPost from "./components/Post/SelectedPost";
import Post from "./components/Post/Post";
import SkeletonPosts from "./Skeletons/SkeletonPosts";
import { fetchPosts } from "../../store/thunks/postsThunks";
import FeedSpinner from "../../components/FeedSpinner";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";
import SkeletonPost from "./Skeletons/SkeletonPost";
import CommentBox from "./components/Post/CommentBox";
import SkeletonComments from "./Skeletons/SkeletonComments";
const Feed = () => {
  const { items, isLoading, error, post, postLoader, postError } = useSelector(
    (state) => state.posts
  );
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
  if (error) {
    console.log(error);
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

  const SkelPost = (
    <>
      <SkeletonPost />
    </>
  );

  return (
    <>
      {isLoading && <FeedSpinner />}
      {value && (
        <Modal
          title={viewPostTitle}
          footer={<CommentBox />}
          onClose={() => toggle(false)}
        >
          {postLoader ? SkelPost : <SelectedPost post={selectedPost} />}
        </Modal>
      )}
      <FeedContainer>
        <CreatePost />
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

export default Feed;
