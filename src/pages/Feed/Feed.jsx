import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import useToggle from "../../hooks/useToggle";
import Modal from "../../components/Modal";
import Post from "./components/Post/Post";

const Feed = () => {
  const [value, toggleValue] = useToggle(true);

  return (
    <>
      {value && <Modal onClose={() => toggleValue(false)} />}
      <FeedContainer>
        <CreatePost />
        {items.map((item) => (
          <Post key={item} />
        ))}
      </FeedContainer>
    </>
  );
};

export default Feed;
