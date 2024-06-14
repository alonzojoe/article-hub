import React from "react";
import avatar from "../assets/images/avatars/react.png";

const Avatar = (props) => {
  return <img src={avatar} {...props} />;
};

export default Avatar;
