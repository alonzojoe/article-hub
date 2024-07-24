import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CaughtUp from "./components/Post/CaughtUp";
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
import { useSearchParams } from "react-router-dom";
const Feed = () => {
  const { items, isLoading, error, post, postLoader, postError } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
  const viewPostTitle = `${selectedPost?.user?.name}'s Post`;

  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchPosts({ search: query }));
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

  // if (!isLoading && items.length > 0) {
  //   const cards = document.querySelectorAll(".card-post");

  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entry", entries);
  //   });

  //   observer.observe(cards[0]);
  // }

  return (
    <>
      {isLoading && <FeedSpinner />}
      {value && (
        <Modal
          title={viewPostTitle}
          footer={<CommentBox postId={selectedPost.id} />}
          onClose={() => toggle(false)}
        >
          {/* {postLoader ? SkelPost : <SelectedPost post={selectedPost} />} */}
          <SelectedPost post={selectedPost} />
        </Modal>
      )}
      <FeedContainer>
        <CreatePost />
        {errorMessage}
        {!isLoading ? (
          items.map((post) => (
            <Post
              targetClass="card-post"
              key={post.id}
              toggle={() => viewComments(post.id)}
              post={post}
              onSelect={() => setSelectedPost(post)}
            />
          ))
        ) : (
          <SkeletonPosts />
        )}
        <CaughtUp />
      </FeedContainer>
    </>
  );
};

export default Feed;
