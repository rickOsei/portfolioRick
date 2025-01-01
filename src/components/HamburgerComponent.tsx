import { useSelector } from "react-redux";
import { MenuContext, StateType } from "../pages/RootLayer";
import { useContext } from "react";

const HamburgerComponent = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  const { showNavMenu, setShowNavMenu } = useContext(MenuContext);

  return (
    <button
      id="menu-btn"
      className={`${
        showNavMenu && "open"
      } block hamburger md:hidden focus:outline-none z-[999]`}
      onClick={() => setShowNavMenu((prev) => !prev)}
    >
      <span
        className={
          currentMode === "dark" ? "hamburger-top-dark" : "hamburger-top"
        }
      ></span>
      <span
        className={
          currentMode === "dark" ? "hamburger-middle-dark" : "hamburger-middle"
        }
      ></span>
      <span
        className={
          currentMode === "dark" ? "hamburger-bottom-dark" : "hamburger-bottom"
        }
      ></span>
    </button>
  );
};

export default HamburgerComponent;
