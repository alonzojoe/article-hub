const AuthContainer = ({ children }) => {
  return (
    <div id="main-wrapper" className="auth-customizer-none">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3 auth-card">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
