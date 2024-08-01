import { useEffect } from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileFeed from "./components/ProfileFeed";
import { useParams } from "react-router-dom";
import { decryptData } from "../../utils/enc";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
const Profile = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const { id } = useParams();
  const encryptedData = decodeURIComponent(id);
  const userId = decryptData(encryptedData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <>
      {isLoading && <Loader />}
      <ProfileHeader />
      <ProfileFeed userId={userId} />
    </>
  );
};

export default Profile;
