import { BsArrowRight } from "react-icons/bs";
import SocialMedia from "../../components/SocialMedia";
import EmailComponent from "../../components/EmailComponent";
import { StateType } from "../RootLayer";
import { useSelector } from "react-redux";

const Home = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  return (
    <section className="w-full relative mx-auto py-4 flex  justify-center items-center">
      <SocialMedia />
      <div className="main-content w-full px-4 flex flex-col justify-between items-center sm:px-10 md:max-w-4xl md:px-14">
        <p className={currentMode === "dark" ? "dark-text" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          asperiores veritatis rem dolor provident exercitationem, maiores
          distinctio, rerum architecto illum hic incidunt numquam possimus qui
          consectetur, eos ab officiis aspernatur! Iste cumque praesentium
          inventore, consequatur quaerat eligendi aliquam placeat, numquam
          itaque ratione illum porro labore soluta quidem nesciunt molestias.
          Sunt illum voluptatum hic sed eligendi. Eveniet nam quidem dignissimos
          aperiam?
        </p>

        <div className="w-full flex flex-row justify-start mt-10">
          <p className={currentMode === "dark" ? "dark-text" : ""}>
            Get to know more
          </p>
          <span
            className={
              currentMode === "dark"
                ? "pointing-arrow  dark-text"
                : "pointing-arrow "
            }
          >
            <BsArrowRight />
          </span>
        </div>
      </div>
      <EmailComponent />
    </section>
  );
};

export default Home;
