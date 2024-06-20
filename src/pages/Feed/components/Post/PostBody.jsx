import React from "react";

const PostBody = ({ post }) => {
  return (
    <>
      <h3 className="mt-3">{post.title}</h3>
      <p className="text-dark my-3">{post.content}</p>
    </>
  );
};

export default PostBody;
