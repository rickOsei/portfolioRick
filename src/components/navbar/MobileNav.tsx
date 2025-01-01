import { NavLink } from "react-router-dom";
import { VscColorMode } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../features/modeSwitch";
import { MenuContext, StateType } from "../../pages/RootLayer";
import { useContext } from "react";
import HamburgerComponent from "../HamburgerComponent";

const MobileNav = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  const dispatch = useDispatch();
  const { showNavMenu, setShowNavMenu } = useContext(MenuContext);
  const handleClick = () => {
    dispatch(setMode());
  };

  const handleTitleChange = (title: string): void => {
    const pageTitle = title;
    document.title = `${pageTitle} | Rick Osei`;
    setShowNavMenu(false);
  };

  return (
    <div
      className={`w-[100vw] ${
        currentMode === "dark" ? "bg-black" : "bg-[#fffdfc]"
      } absolute left-0 z-30 px-3 py-14 sm:px-10 ${
        showNavMenu ? "h-[100vh] top-0" : "h-0 top-[-50%]"
      } md:hidden`}
    >
      <div className="flex w-full justify-between">
        <div className="color-mode" onClick={handleClick}>
          <VscColorMode
            className={currentMode === "dark" ? "dark-icon" : "mode-icon"}
          />
        </div>
        <HamburgerComponent />
      </div>
      <ul className="w-full flex flex-col items-center space-y-10">
        <div className="nav-link-container">
          <NavLink
            to="/"
            className={`${
              currentMode === "dark" && "dark-text"
            } current-link text-lg uppercase font-semibold`}
            onClick={() => handleTitleChange("Home")}
          >
            Home
          </NavLink>
          <div className={currentMode === "light" ? "line" : "dark-line"}></div>
        </div>
        <div className="nav-link-container">
          <NavLink
            to="about"
            className={`${
              currentMode === "dark" && "dark-text"
            } current-link text-lg uppercase font-semibold`}
            // onClick={() => handleTitleChange("About")}
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
            } current-link text-lg uppercase font-semibold`}
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
            } current-link text-lg uppercase font-semibold`}
            onClick={() => handleTitleChange("Contact")}
          >
            Contact
          </NavLink>
          <div className={currentMode === "light" ? "line" : "dark-line"}></div>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav;
