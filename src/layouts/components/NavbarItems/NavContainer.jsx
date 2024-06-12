import classes from "./NavbarContainer.module.css";

const NavContainer = ({ children }) => {
  return (
    <header className={`${classes["header-shadow"]} app-header w-100`}>
      <nav className="navbar navbar-expand-lg navbar-light align-items-center">
        {children}
      </nav>
    </header>
  );
};

export default NavContainer;
