import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";
const EmailComponent = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <>
      <a
        href="mailto:rickoseiampah@gmail.com"
        className="hidden email-address h-full lg:flex flex-col justify-end items-center px-5 space-y-8 "
      >
        <p className={currentMode === "dark" ? "dark-text" : ""}>
          rickoseiampah@gmail.com
        </p>
        <div
          className={
            currentMode === "dark" ? "dark-horizontal" : "horizontal-line"
          }
        ></div>
      </a>
    </>
  );
};

export default EmailComponent;
