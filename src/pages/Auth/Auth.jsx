import { useEffect } from "react";
import Logo from "../../components/Logo";
import AuthContainer from "./components/AuthContainer";
import Card from "../../components/Card";
import AuthLogin from "./components/AuthLogin";
import AuthRegister from "./components/AuthRegister";
import useToggle from "../../hooks/useToggle";
import useTheme from "../../hooks/useTheme";
import { Toaster } from "react-hot-toast";
const Auth = () => {
  const [value, toggle] = useToggle(false);
  const [setAppTheme] = useTheme();
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

  return (
    <>
      <Toaster />
      <AuthContainer>
        <Card className="mb-0">
          <a
            href="#"
            className="text-nowrap logo-img text-center d-block mb-4 w-100"
          >
            <Logo customWidth="50" />
          </a>
          {activeTab}
        </Card>
      </AuthContainer>
    </>
  );
};

export default Auth;
