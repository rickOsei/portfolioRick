import SocialMedia from "../../components/SocialMedia";
import EmailComponent from "../../components/EmailComponent";
// import { StateType } from "../RootLayer";
// import { useSelector } from "react-redux";
import SendEmailComponent from "../../components/SendEmailComponent";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  // const {
  //   modeReducer: { currentMode },
  // } = useSelector((state: StateType) => state);

  return (
    <section className="w-full relative mx-auto py-4 flex flex-col justify-center items-center lg:flex-row">
      <SocialMedia />
      <div className="main-content w-full px-4 flex flex-col  sm:px-10 md:max-w-4xl md:px-14 lg:max-w-5xl">
        {/* <div className={currentMode === "dark" ? "dark-text" : ""}> */}
        <h2 className="font-black text-4xl leading-normal w-full mb-5">
          Contact me
        </h2>
        <p className="mb-4 font-medium w-full">
          Feel free to reach out or drop me an email directly at
          <span className="font-bold text-secondaryColor">
            {" "}
            rickoseiampahgmail.com
          </span>
          .
        </p>

        <SendEmailComponent />
        {/* </div> */}

        <div className="w-full flex flex-row justify-start items-center my-14 ">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center space-x-2 hover:underline"
          >
            <h2 className="font-medium !text-secondaryColor">
              View Full Résumé
            </h2>
            <span className="pointing-arrow !text-secondaryColor">
              <BsArrowRight />
            </span>
          </a>
        </div>
      </div>
      <EmailComponent />
      <div className="dummy-space w-full h-14 lg:hidden"></div>
    </section>
  );
};

export default Contact;
