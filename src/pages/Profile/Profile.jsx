import { useParams } from "react-router-dom";
import { decryptData } from "../../utils/enc";
const Profile = () => {
  const { id } = useParams();
  const encryptedData = decodeURIComponent(id);
  const userId = decryptData(encryptedData);

  return <div>Profile: {userId}</div>;
};

export default Profile;
