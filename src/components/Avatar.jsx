import React from "react";

const Avatar = ({ avatar, ...props }) => {
  return <img src={avatar} {...props} />;
};

export default Avatar;
