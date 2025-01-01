import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { createContext, useState } from "react";
import MobileNav from "../components/navbar/MobileNav";

export type StateType = {
  modeReducer: {
    currentMode: string;
  };
};

interface ContextType {
  showNavMenu: boolean;
  setShowNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<ContextType>({
  showNavMenu: false,
  setShowNavMenu: () => {},
});

const RootLayer = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showNavMenu, setShowNavMenu }}>
      <main
        className={
          currentMode === "light"
            ? "main-page-layout"
            : "main-page-layout dark-bg"
        }
      >
        <header className="py-10 main-header md:py-14">
          <Navbar />
        </header>
        <div className="main-section">
          <div className={currentMode === "dark" ? "dark-text" : ""}>
            <Outlet />
          </div>
        </div>
        {/* <div className="bg-black w-[100vw] h-[100vh] absolute top-0 z-[999]"></div> */}
        <MobileNav />
      </main>
    </MenuContext.Provider>
  );
};

export default RootLayer;
