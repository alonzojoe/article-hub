import React from "react";

import SkeletonPost from "./SkeletonPost";
const SkeletonPosts = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {arr.map((item) => (
        <SkeletonPost key={item} />
      ))}
    </>
  );
};

export default SkeletonPosts;
