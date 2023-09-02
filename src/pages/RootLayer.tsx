import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const RootLayer = () => {
  return (
    <main className="main-page-layout dark">
      <header className="py-10">
        <Navbar />
      </header>
      <Outlet />
    </main>
  );
};

export default RootLayer;
