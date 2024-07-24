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
import ScrollLoader from "./Skeletons/ScrollLoader";
import { useSearchParams } from "react-router-dom";
const Feed = () => {
  const { items, isLoading, error, lastPage } = useSelector(
    (state) => state.posts
  );
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
  const viewPostTitle = `${selectedPost?.user?.name}'s Post`;

  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const [initialLoad, setInitialLoad] = useState(false);
  useEffect(() => {
    setInitialLoad(true);
    const timer = setTimeout(() => {
      dispatch(fetchPosts({ search: query, page: currentPage }));
      setInitialLoad(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight ||
  //     isLoading
  //   ) {
  //     return;
  //   }

  //   if (page !== lastPage) {
  //     const nextPage = currentPage + 1;
  //     setCurrentPage(nextPage);
  //     dispatch(fetchPosts({ search: query, page: nextPage }));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isLoading]);

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

  return (
    <>
      {initialLoad && <FeedSpinner />}
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
        {!initialLoad ? (
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
        {isLoading && <ScrollLoader withComments={false} />}
        {currentPage === lastPage && <CaughtUp />}
        {currentPage}
      </FeedContainer>
    </>
  );
};

export default Feed;
