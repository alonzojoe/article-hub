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
import useSession from "../../hooks/useSession";
import Loader from "../../components/Loader";
const Feed = () => {
  const { sessionLoader, sessionError } = useSession();

  const {
    items,
    total_items,
    interval,
    isLoading,
    error,
    lastPage,
    currentPage,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
  const viewPostTitle = `${selectedPost?.user?.name}'s Post`;

  const [searchParams] = useSearchParams();

  const query =
    searchParams.get(`${import.meta.env.VITE_SEARCH_KEYWORD}`) || "";

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("component mounted fetchPost");

      dispatch(postActions.setPost());
      dispatch(fetchPosts({ search: query, page: 1 }));
      dispatch(postActions.resetCurrentPage());
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          currentPage !== lastPage &&
          items.length > 0
        ) {
          console.log("observer is intersecting");
          console.log("intersection observer observing fetchPost");
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
  }, [dispatch, observerTarget, currentPage, query, lastPage, items.length]);

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

  if (sessionLoader) return <Loader />;
  if (sessionError) {
    window.location.href = "/login";

    return null;
  }

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
        {query && items.length !== 0 && (
          <div className="card mb-0">
            <div className="card-body">
              <h4 className="card-title">
                Search Result For &quot;{query}&quot;
              </h4>
              <p className="card-subtitle mb-0">
                About {total_items} result ({interval} seconds)
              </p>
            </div>
          </div>
        )}
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

        <div
          ref={observerTarget}
          style={{ height: "50px", display: `${isLoading ? "none" : "block"}` }}
        ></div>

        {!isLoading && query !== "" && items.length === 0 && <SearchNotFound />}
        {currentPage === lastPage && items.length > 0 && <CaughtUp />}
      </FeedContainer>
    </>
  );
};

export default Feed;
