import { StateType } from "../pages/RootLayer";

import { useSelector } from "react-redux";
import { data } from "../utils/projects-data";
import PortfolioLightImage from "../assets/projects/portfolio-light.webp";
import { FiArrowUpRight } from "react-icons/fi";
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
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              className="flex flex-col-reverse md:gap-8 md:flex-row"
            >
              <img
                src={
                  item.title === "My Personal Portfolio"
                    ? currentMode === "light"
                      ? item.img
                      : PortfolioLightImage
                    : item.img
                }
                alt="project-cover"
                className="w-full h-[150px] rounded-lg shadow-md md:w-[180px] md:h-[100px] md:mt-5 lg:w-[250px] lg:h-[120px] min-w-[250px]"
              />
              <div className="main-content w-full py-2 flex flex-col justify-between items-center mb-4">
                <div className="flex flex-row items-center w-full">
                  <h2 className="font-medium">{item.title}</h2>
                  <span className="link-arrow !text-secondaryColor">
                    <FiArrowUpRight />
                  </span>
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
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
