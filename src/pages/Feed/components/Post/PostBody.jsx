import React from "react";

const PostBody = (props) => {
  return (
    <>
      <h3>Article Title</h3>
      <p className="text-dark my-3">Article Content</p>
      <img
        src="./assets/images/products/s1.jpg"
        alt=""
        className="img-fluid rounded-4 w-100 object-fit-cover"
        style={{ height: "360px" }}
      />
    </>
  );
};

export default PostBody;
