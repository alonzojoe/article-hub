import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getPost } from "../../../../store/thunks/postsThunks";
import moment from "moment";
import { postActions } from "../../../../store/slices/postSlice";
import api from "../../../../services/api";
import toast from "react-hot-toast";

const PostEngagements = ({ post, toggle: toggleTrue, onSelect, selected }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const voteChecker = post.votes.some((vote) => vote.user_id === user.id);

  const viewPost = async () => {
    onSelect();
    toggleTrue(true);
    dispatch(getPost(post.id));
  };

  const castVote = async () => {
    const dateNow = moment().toISOString();
    const voteDetails = {
      article_id: post.id,
      created_at: dateNow,
      id: Date.now(),
      udated_at: dateNow,
      user_id: user.id,
    };

    console.log(voteDetails);

    if (!voteChecker) {
      dispatch(postActions.upVote({ voteDetails }));
      try {
        await api.post("/cast/vote", {
          article_id: post.id,
          user_id: user.id,
        });
      } catch (error) {
        toast.error("An error occured");
        dispatch(postActions.upVote({ voteDetails }));
      }
    } else {
      dispatch(postActions.downVote({ voteDetails }));
      try {
        await api.delete(`/cast/down-vote/${voteDetails.article_id}`, {
          params: {
            user_id: user.id,
          },
        });
      } catch (error) {
        toast.error("An error occured");
        dispatch(postActions.upVote({ voteDetails }));
      }
    }
  };

  const voteIcon = voteChecker ? "bxs-upvote" : "bx-upvote";

  return (
    <div className="d-flex align-items-center my-3">
      {!selected && (
        <div className="d-flex align-items-center gap-2">
          <a
            className={`d-flex align-items-center justify-content-center text-bg-primary p-2 fs-4 rounded-circle`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Like"
            onClick={castVote}
          >
            <i className={`bx ${voteIcon}`}></i>
          </a>
          <span className="text-dark fw-semibold">{post.votes.length}</span>
        </div>
      )}
      {/* {`Vote Check : ${voteChecker}`}
      {`Vote : ${JSON.stringify(post.votes)}`} */}
      {!selected && (
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
          {/* <span className="text-dark fw-semibold">{post.comments.length}</span> */}
        </div>
      )}
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
