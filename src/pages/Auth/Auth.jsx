import { useEffect } from "react";
import Logo from "../../components/Logo";
import AuthContainer from "./components/AuthContainer";
import Card from "../../components/Card";
import AuthLogin from "./components/AuthLogin";
import AuthRegister from "./components/AuthRegister";
import AuthImages from "./components/AuthImages";
import useToggle from "../../hooks/useToggle";
import useTheme from "../../hooks/useTheme";
import useSession from "../../hooks/useSession";
import Loader from "../../components/Loader";
import { Toaster } from "react-hot-toast";
const Auth = () => {
  const [value, toggle] = useToggle(false);
  const [setAppTheme] = useTheme();
  const { sessionLoader, sessionError } = useSession();

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  const changeSection = async (params) => {
    toggle(params);
  };

  const activeTab = value ? (
    <AuthRegister changeSection={changeSection} />
  ) : (
    <AuthLogin changeSection={changeSection} />
  );

  if (sessionLoader) return <Loader />;
  if (!sessionError) {
    window.location.href = "/";

    return null;
  }

  return (
    <>
      <Toaster />
      <AuthContainer>
        <div className="row">
          <AuthImages />
          <div className="col-xl-5 col-xxl-4">
            <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4 border-left">
              <div className="col-sm-8 col-md-6 col-xl-9">
                <h2 className="mb-3 fs-7 fw-bolder mb-3">
                  Welcome to ArticleHub
                </h2>
                {activeTab}
              </div>
            </div>
          </div>
        </div>
        {/* <Card className="mb-0">
          <a
            href="#"
            className="text-nowrap logo-img text-center d-block mb-4 w-100"
          >
            <Logo customWidth="50" />
          </a>
          {activeTab}
        </Card> */}
      </AuthContainer>
    </>
  );
};

export default Auth;
