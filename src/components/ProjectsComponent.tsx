import { StateType } from "../pages/RootLayer";

import { useSelector } from "react-redux";
import { data } from "../utils/projects-data";
const ProjectsComponent = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);
  return (
    <div className="mt-5">
      {/* <h2 className="mb-4 font-medium">Experience</h2> */}
      <div className="w-full relative mx-auto flex flex-col justify-center items-center gap-10">
        {data.map((item) => {
          return (
            <div className="flex flex-col-reverse md:gap-8 md:flex-row ">
              <img
                src={item.img}
                alt="project-cover"
                className="w-full h-[150px] rounded-lg shadow-md md:w-[180px] md:h-[100px] md:mt-5"
              />
              <div className="main-content w-full py-2 flex flex-col justify-between items-center mb-4">
                <div className="flex flex-col-reverse gap-1 items-start justify-center w-full md:flex-row md:justify-between md:items-center">
                  <h2 className="font-medium">{item.title}</h2>
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
                        currentMode === "dark"
                          ? "text-teal-200"
                          : "text-teal-900"
                      }  p-2 px-3 rounded-2xl text-xs font-semibold`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
