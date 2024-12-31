import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";
import { useState } from "react";

const HamburgerComponent = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);
  return (
    <button
      id="menu-btn"
      className={`${
        showNavMenu && "open"
      } block hamburger md:hidden focus:outline-none`}
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
