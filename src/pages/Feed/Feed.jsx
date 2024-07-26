import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CaughtUp from "./components/Post/CaughtUp";
import SearchNotFound from "./components/Post/SearchNotFound";
import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
import SelectedPost from "./components/Post/SelectedPost";
import Post from "./components/Post/Post";
import { fetchPosts } from "../../store/thunks/postsThunks";
import FeedSpinner from "../../components/FeedSpinner";
import Modal from "../../components/Modal";
import useToggle from "../../hooks/useToggle";
import CommentBox from "./components/Post/CommentBox";
import ScrollLoader from "./Skeletons/ScrollLoader";
import { useSearchParams } from "react-router-dom";
import { postActions } from "../../store/slices/postSlice";
const Feed = () => {
  const { items, isLoading, error, lastPage, currentPage } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
  const viewPostTitle = `${selectedPost?.user?.name}'s Post`;

  const [searchParams] = useSearchParams();

  const query =
    searchParams.get(`${import.meta.env.VITE_SEARCH_KEYWORD}`) || "";

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchPosts({ search: query, page: currentPage }));
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && currentPage !== lastPage) {
          console.log("observer is intersecting");
          const nextPage = currentPage + 1;
          dispatch(fetchPosts({ search: query, page: nextPage }));
          dispatch(postActions.incrementCurrentPage());
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [dispatch, observerTarget, currentPage, query, lastPage]);

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
      {isLoading && items.length === 0 && <FeedSpinner />}
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
        {items.length > 0 &&
          items.map((post) => (
            <Post
              targetClass="card-post"
              key={post.id}
              toggle={() => viewComments(post.id)}
              post={post}
              onSelect={() => setSelectedPost(post)}
            />
          ))}
        {isLoading && <ScrollLoader withComments={false} />}

        <div ref={observerTarget} style={{ height: "50px" }}></div>

        {!isLoading && query !== "" && items.length === 0 && <SearchNotFound />}
        {currentPage === lastPage && items.length > 0 && <CaughtUp />}
      </FeedContainer>
    </>
  );
};

export default Feed;
