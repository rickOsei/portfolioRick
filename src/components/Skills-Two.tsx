import { SiMui, SiTailwindcss, SiRedux } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";
import { TbBrandFirebase } from "react-icons/tb";

const SkillsTwo = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <>
      <div className="hidden skills-right h-full lg:flex flex-col justify-end items-center px-5 space-y-8 ">
        <SiRedux className={currentMode === "dark" ? "dark-text" : ""} />
        <SiTailwindcss className={currentMode === "dark" ? "dark-text" : ""} />
        <SiMui className={currentMode === "dark" ? "dark-text" : ""} />
        <DiPhotoshop className={currentMode === "dark" ? "dark-text" : ""} />

        <TbBrandFirebase
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <div
          className={
            currentMode === "dark" ? "dark-horizontal" : "horizontal-line"
          }
        ></div>
      </div>

      {/* <div
        className={
          currentMode === "dark"
            ? "skills-right-mini w-full px-2 flex flex-row justify-center items-center py-5 bg-bgColorDark space-x-8 lg:hidden"
            : "skills-right-mini w-full px-2 flex flex-row justify-center items-center py-5 bg-bgColorLight space-x-8 lg:hidden"
        }
      >
       
        <SiTailwindcss className={currentMode === "dark" ? "dark-text" : ""} />
        <SiMui className={currentMode === "dark" ? "dark-text" : ""} />
        <DiPhotoshop className={currentMode === "dark" ? "dark-text" : ""} />
        <SiRedux className={currentMode === "dark" ? "dark-text" : ""} />
        <TbBrandFirebase
          className={currentMode === "dark" ? "dark-text" : ""}
        />
        <div className="horizontal-line"></div>
      </div> */}
    </>
  );
};

export default SkillsTwo;
