import { useEffect } from "react";
import FeedContainer from "../../Feed/components/FeedContainer";
import Post from "../../Feed/components/Post/Post";
import SkeletonPosts from "../../Feed/Skeletons/SkeletonPosts";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../../store/thunks/postsThunks";
import Modal from "../../../components/Modal";
import useToggle from "../../../hooks/useToggle";
import SelectedPost from "../../Feed/components/Post/SelectedPost";
const ProfileFeed = ({ userId }) => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [value, toggle] = useToggle(false);
  const viewPostTitle = `${selectedPost?.user?.name}'s Post`;

  const viewComments = (id) => {
    toggle(true);
  };

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
      {value && (
        <Modal
          title={viewPostTitle}
          footer={<CommentBox postId={selectedPost.id} />}
          onClose={() => toggle(false)}
        >
          <SelectedPost post={selectedPost} />
        </Modal>
      )}
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
