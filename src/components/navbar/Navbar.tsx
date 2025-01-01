import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-black.png";
import LogoWhite from "../../assets/logo.png";
import { VscColorMode } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../features/modeSwitch";
import { StateType } from "../../pages/RootLayer";
import HamburgerComponent from "../HamburgerComponent";

const Navbar = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMode());
  };

  const handleTitleChange = (title: string): void => {
    const pageTitle = title;
    document.title = `${pageTitle} | Rick Osei`;
  };

  return (
    <nav className="w-full relative mx-auto py-4 flex justify-center items-center">
      <div className="w-full px-3 flex justify-between items-center sm:px-10 md:max-w-5xl md:px-14 lg:max-w-6xl">
        <NavLink
          to="/"
          className="block relative right-1"
          onClick={() => handleTitleChange("Home")}
        >
          <img
            src={currentMode === "light" ? Logo : LogoWhite}
            alt="logo"
            className="w-10 h-10"
          />
        </NavLink>
        <div id="nav-links" className="nav-links  hidden md:flex">
          <div className="nav-link-container">
            <NavLink
              to="about"
              className={`${
                currentMode === "dark" && "dark-text"
              } current-lg-link nav-link`}
              onClick={() => handleTitleChange("About")}
            >
              About
            </NavLink>
            <div
              className={currentMode === "light" ? "line" : "dark-line "}
            ></div>
          </div>

          <div className="nav-link-container">
            <NavLink
              to="projects"
              className={`${
                currentMode === "dark" && "dark-text"
              } current-lg-link nav-link`}
              onClick={() => handleTitleChange("Projects")}
            >
              Projects
            </NavLink>
            <div
              className={currentMode === "light" ? "line" : "dark-line "}
            ></div>
          </div>

          <div className="nav-link-container">
            <NavLink
              to="contact"
              className={`${
                currentMode === "dark" && "dark-text"
              } current-lg-link nav-link`}
              onClick={() => handleTitleChange("Contact")}
            >
              Contact
            </NavLink>
            <div
              className={currentMode === "light" ? "line" : "dark-line"}
            ></div>
          </div>
          <div className="color-mode" onClick={handleClick}>
            <VscColorMode
              className={currentMode === "dark" ? "dark-icon" : "mode-icon"}
            />
          </div>
        </div>
        <HamburgerComponent />
      </div>
    </nav>
  );
};

export default Navbar;
