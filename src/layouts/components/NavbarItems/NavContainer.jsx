import React from "react";

const NavContainer = ({ children }) => {
  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light align-items-center">
        {children}
      </nav>
    </header>
  );
};

export default NavContainer;
