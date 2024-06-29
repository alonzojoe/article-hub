import React from "react";
import Card from "../../../../components/Card";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostEngagements from "./PostEngagements";
import CommentSection from "./CommentSection";
import { useSelector } from "react-redux";
const SelectedPost = ({ post, toggle, onSelect }) => {
  return (
    <>
      <Card>
        <PostHeader post={post} />
        <PostBody post={post} />
        <PostEngagements
          toggle={toggle}
          post={post}
          onSelect={onSelect}
          selected={true}
        />
        <CommentSection />
      </Card>
    </>
  );
};

export default SelectedPost;
