import React from "react";

const PostBody = ({ post }) => {
  return (
    <>
      <h3 className="mt-3">{post.title}</h3>
      <p className="text-dark my-3">{post.content}</p>
      {post.photo_url && (
        <div className="article-container mb-3">
          <img
            src={post.photo_url}
            alt=""
            className="img-fluid rounded-4 w-100"
          />
        </div>
      )}
    </>
  );
};

export default PostBody;
