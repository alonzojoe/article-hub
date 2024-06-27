import { useSelector } from "react-redux";
import { useState } from "react";
import api from "../../../../services/api";
import toast from "react-hot-toast";
const PostEngagements = ({ post, toggle: toggleTrue, onSelect }) => {
  const [vote, setVote] = useState(false);
  const [currentCount, setCurrentCount] = useState(post.votes.length);
  const viewPost = () => {
    onSelect();
    toggleTrue(true);
  };

  const { user } = useSelector((state) => state.auth);

  const upVote = async () => {
    try {
      await api.post("/cast/vote", {
        article_id: post.id,
        user_id: user.id,
      });
      setVote(true);
      setCurrentCount((prev) => prev + 1);
    } catch (error) {
      toast.error("An error occured");
    }
  };

  const conditioned =
    vote || post.votes.some((vote) => vote.user_id === user.id);

  const voteIcon = conditioned ? "bxs-upvote" : "bx-upvote";

  return (
    <div className="d-flex align-items-center my-3">
      <div className="d-flex align-items-center gap-2">
        <a
          className={`d-flex align-items-center justify-content-center text-bg-primary p-2 fs-4 rounded-circle ${
            conditioned ? "pe-none" : ""
          }`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Like"
          onClick={upVote}
        >
          <i className={`bx ${voteIcon}`}></i>
        </a>
        <span className="text-dark fw-semibold">{currentCount}</span>
      </div>
      <div className="d-flex align-items-center gap-2 ms-4">
        <a
          className="d-flex align-items-center justify-content-center text-bg-secondary p-2 fs-4 rounded-circle"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Comment"
          onClick={viewPost}
        >
          <i className="bx bx-message-alt-detail"></i>
        </a>
        <span className="text-dark fw-semibold">{post.comments.length}</span>
      </div>
      <a
        className="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Share"
      >
        <i className="bx bxs-share bx-flip-horizontal fs-6"></i>
      </a>
    </div>
  );
};

export default PostEngagements;
