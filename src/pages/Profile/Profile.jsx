import { useEffect } from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileFeed from "./components/ProfileFeed";
import { useParams } from "react-router-dom";
import { decryptData } from "../../utils/enc";
const Profile = () => {
  const { id } = useParams();
  const encryptedData = decodeURIComponent(id);
  const userId = decryptData(encryptedData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ProfileHeader />
      <ProfileFeed userId={userId} />
    </>
  );
};

export default Profile;
