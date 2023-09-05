import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";
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

      <div
        className={
          currentMode === "dark"
            ? "social-media-mini w-full px-2 flex flex-row justify-center items-center py-5 bg-bgColorDark space-x-8 lg:hidden"
            : "social-media-mini w-full px-2 flex flex-row justify-center items-center py-5 bg-bgColorLight space-x-8 lg:hidden"
        }
      >
        <FiTwitter className={currentMode === "dark" ? "dark-text" : ""} />
        <FiGithub className={currentMode === "dark" ? "dark-text" : ""} />
        <FiLinkedin className={currentMode === "dark" ? "dark-text" : ""} />
        <FiInstagram className={currentMode === "dark" ? "dark-text" : ""} />
        <FiMail className={currentMode === "dark" ? "dark-text" : ""} />
        <div className="horizontal-line"></div>
      </div>
    </>
  );
};

export default SocialMedia;
