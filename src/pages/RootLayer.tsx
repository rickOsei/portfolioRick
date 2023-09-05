import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";

export type StateType = {
  modeReducer: {
    currentMode: string;
  };
};

const RootLayer = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <main
      className={
        currentMode === "light"
          ? "main-page-layout"
          : "main-page-layout dark-bg"
      }
    >
      <header className="py-5 main-header md:py-14">
        <Navbar />
      </header>
      <div className="main-section">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayer;
