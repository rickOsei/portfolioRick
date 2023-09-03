import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo-r-b.svg";
import LogoWhite from "../../assets/logo-white-bg.svg";
import { VscColorMode } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../features/modeSwitch";
import { StateType } from "../../pages/RootLayer";

const Navbar = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMode());
  };

  return (
    <nav className="w-full relative mx-auto py-4 flex justify-center items-center">
      <div className="w-full px-3 flex justify-between items-center sm:px-10 md:max-w-5xl md:px-14">
        <NavLink to="/" className="block p-1">
          <img
            src={currentMode === "light" ? Logo : LogoWhite}
            alt="logo"
            className="w-12 h-12"
          />
        </NavLink>
        <div className="nav-links  hidden md:flex">
          <div className="nav-link-container">
            <NavLink
              to="projects"
              className={
                currentMode === "light" ? "nav-link" : "nav-link dark-text"
              }
            >
              Projects
            </NavLink>
            <div
              className={currentMode === "light" ? "line" : "dark-line "}
            ></div>
          </div>

          <div className="nav-link-container">
            <NavLink
              to="about"
              className={
                currentMode === "light" ? "nav-link" : "nav-link dark-text"
              }
            >
              About
            </NavLink>
            <div
              className={currentMode === "light" ? "line" : "dark-line "}
            ></div>
          </div>

          <div className="nav-link-container">
            <NavLink
              to="contact"
              className={
                currentMode === "light" ? "nav-link" : "nav-link dark-text"
              }
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
      </div>
    </nav>
  );
};

export default Navbar;
