import { StateType } from "../pages/RootLayer";
import { data } from "../utils/data";

import { useSelector } from "react-redux";
const ExperienceComponent = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);
  return (
    <div className="mt-10 mb-4 px-4 sm:px-10 md:max-w-2xl md:px-14 lg:max-w-5xl">
      <h2 className="mb-4 font-medium">Experience</h2>
      <div className="w-full relative mx-auto py-4 flex flex-col justify-center items-center">
        {data.map((item) => {
          return (
            <div className="main-content w-full  flex flex-col justify-between items-center ">
              {/* <div className={currentMode === "dark" ? "dark-text" : ""}> */}
              <div className="flex flex-col-reverse items-start justify-center w-full  md:flex-row md:justify-between md:items-center">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <span className="text-sm font-medium">{item.period}</span>
              </div>
              <p>{item.details}</p>
              <div className=" w-full mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    className={`${
                      currentMode === "dark"
                        ? "bg-teal-400/10"
                        : "bg-teal-500/20"
                    } ${
                      currentMode === "dark" ? "text-teal-200" : "text-teal-900"
                    }  p-2 px-3 rounded-2xl text-xs font-semibold`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceComponent;
