import ProfileHeader from "./components/ProfileHeader";
import ProfileFeed from "./components/ProfileFeed";
import { useParams } from "react-router-dom";
import { decryptData } from "../../utils/enc";
const Profile = () => {
  const { id } = useParams();
  const encryptedData = decodeURIComponent(id);
  const userId = decryptData(encryptedData);

  return (
    <>
      <ProfileHeader />
      <ProfileFeed userId={userId} />
    </>
  );
};

export default Profile;
