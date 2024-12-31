import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";

const Skills = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <>
      <div className="hidden skills-left h-full lg:flex flex-col justify-end items-center px-5 space-y-8 ">
        <RiJavascriptLine
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <TbBrandTypescript
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <SiReact className={currentMode === "dark" ? "dark-text" : ""} />
        <TbBrandNextjs className={currentMode === "dark" ? "dark-text" : ""} />
        <FaNodeJs className={currentMode === "dark" ? "dark-text" : ""} />
        <div
          className={
            currentMode === "dark" ? "dark-horizontal" : "horizontal-line"
          }
        ></div>
      </div>

      <div
        className={
          currentMode === "dark"
            ? "skills-left-mini w-full px-2 flex flex-row justify-center items-center py-5 bg-bgColorDark space-x-8 lg:hidden"
            : "skills-left-mini w-full px-2 flex flex-row justify-center items-center py-5 bg-bgColorLight space-x-8 lg:hidden"
        }
      >
        <RiJavascriptLine
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <TbBrandTypescript
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <SiReact className={currentMode === "dark" ? "dark-text" : ""} />
        <TbBrandNextjs className={currentMode === "dark" ? "dark-text" : ""} />
        <FaNodeJs className={currentMode === "dark" ? "dark-text" : ""} />

        <div className="horizontal-line"></div>
      </div>
    </>
  );
};

export default Skills;
