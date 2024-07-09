import Card from "../../../components/Card";
import profileBg from "../../../assets/images/bg/profilebg.jpg";
import Avatar from "../../../components/Avatar";
import { useSelector } from "react-redux";
const ProfileHeader = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Card className="overflow-hidden">
      <img src={profileBg} alt="profile-bg" className="img-fluid" />
      <div className="row align-items-center">
        <div className="col-lg-4 order-lg-1 order-2">
          {/* <div className="d-flex align-items-center justify-content-around m-4">
            <div className="text-center">
              <i className="ti ti-file-description fs-6 d-block mb-2"></i>
              <h4 className="mb-0 fw-semibold lh-1">938</h4>
              <p className="mb-0 fs-4">Posts</p>
            </div>
            <div className="text-center">
              <i className="ti ti-user-circle fs-6 d-block mb-2"></i>
              <h4 className="mb-0 fw-semibold lh-1">3,586</h4>
              <p className="mb-0 fs-4">Followers</p>
            </div>
            <div className="text-center">
              <i className="ti ti-user-check fs-6 d-block mb-2"></i>
              <h4 className="mb-0 fw-semibold lh-1">2,659</h4>
              <p className="mb-0 fs-4">Following</p>
            </div>
          </div> */}
        </div>
        <div className="col-lg-4 mt-n3 order-lg-2 order-1">
          <div className="mt-n5">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <div
                className="linear-gradient d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "110px", height: "110px" }}
              >
                <div
                  className="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <Avatar alt="profile-picture" className="w-100 h-100" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h5 className="fs-5 mb-0 fw-semibold">{user?.name}</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 order-last">
          <ul className="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start my-3 gap-3">
            {/* <li className="position-relative">
              <a
                className="d-flex align-items-center justify-content-center text-bg-primary p-2 fs-4 rounded-circle"
                href="javascript:void(0)"
                width="30"
                height="30"
              >
                <i className="ti ti-brand-facebook"></i>
              </a>
            </li>
            <li className="position-relative">
              <a
                className="text-bg-secondary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                href="javascript:void(0)"
              >
                <i className="ti ti-brand-twitter"></i>
              </a>
            </li>
            <li className="position-relative">
              <a
                className="text-bg-secondary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                href="javascript:void(0)"
              >
                <i className="ti ti-brand-dribbble"></i>
              </a>
            </li>
            <li className="position-relative">
              <a
                className="text-bg-danger d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                href="javascript:void(0)"
              >
                <i className="ti ti-brand-youtube"></i>
              </a>
            </li> */}
            <li>
              <button className="btn btn-primary">Create New Article</button>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
