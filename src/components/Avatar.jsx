import React from "react";
import defaultProfile from "../assets/images/avatars/user-default.jpg";
import { useSelector } from "react-redux";
const Avatar = (props) => {
  const user = useSelector((state) => state.auth);
  const avatar = user.profile_url || defaultProfile;
  return <img src={avatar} {...props} />;
};

export default Avatar;
