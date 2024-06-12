import FeedContainer from "./components/FeedContainer";
import CreatePost from "./components/NewPost/CreatePost";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import useToggle from "../../hooks/useToggle";
import Modal from "../../components/Modal";

const Feed = () => {
  return (
    <>
      <Modal />
      <FeedContainer>
        <CreatePost />
      </FeedContainer>
    </>
  );
};

export default Feed;
