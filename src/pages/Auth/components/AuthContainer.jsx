const AuthContainer = ({ children }) => {
  return (
    <div id="main-wrapper">
      <div className="position-relative overflow-hidden bg-body min-vh-100 w-100">
        <div className="position-relative z-index-5">{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;
