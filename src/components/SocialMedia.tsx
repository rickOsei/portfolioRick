import { FiTwitter, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";

const SocialMedia = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <>
      <div className="hidden social-media h-full lg:flex flex-col justify-end items-center px-5 space-y-8 ">
        <FiTwitter className={currentMode === "dark" ? "dark-text" : ""} />
        <FiGithub className={currentMode === "dark" ? "dark-text" : ""} />
        <FiLinkedin className={currentMode === "dark" ? "dark-text" : ""} />
        <FiInstagram className={currentMode === "dark" ? "dark-text" : ""} />
        <div
          className={
            currentMode === "dark" ? "dark-horizontal" : "horizontal-line"
          }
        ></div>
      </div>

      <div className="social-media w-full flex flex-row justify-center items-center py-5 space-x-8 bg-bgColor lg:hidden ">
        <FiTwitter className={currentMode === "dark" ? "dark-text" : ""} />
        <FiGithub className={currentMode === "dark" ? "dark-text" : ""} />
        <FiLinkedin className={currentMode === "dark" ? "dark-text" : ""} />
        <FiInstagram className={currentMode === "dark" ? "dark-text" : ""} />
        <BsFillEnvelopeFill
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <div className="horizontal-line"></div>
      </div>
    </>
  );
};

export default SocialMedia;
