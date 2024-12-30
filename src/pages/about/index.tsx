import ExperienceComponent from "../../components/ExperienceComponent";
import Skills from "../../components/Skills";

const About = () => {
  return (
    <main className="w-full relative mx-auto py-4 flex flex-col justify-center items-center lg:flex-row">
      <Skills />
      <section className="main-content w-full relative mx-auto py-4 flex flex-col justify-center items-center">
        {/* About Me Section */}
        <div className="w-full px-4 flex flex-col justify-between items-center sm:px-10 md:max-w-2xl md:px-14 lg:max-w-5xl">
          <h2 className="mb-4 font-medium w-full">About Me</h2>
          <div className="space-y-8">
            <p>
              As a frontend developer with a knack for graphic design, I
              specialize in creating visually compelling, user-centric web
              applications. With a strong foundation in React and modern web
              technologies, I craft intuitive interfaces that seamlessly combine
              functionality and aesthetics. My experience in graphic design
              enhances my ability to deliver polished, cohesive designs,
              ensuring a balance between technical performance and visual
              appeal. This blend of development and design expertise allows me
              to build solutions that are not only efficient but also engaging
              for users.
            </p>
            {/* <a
              href="https://github.com"
              target="_blank"
              className="flex items-center text-teal-600 hover:text-teal-800 mt-4"
            >
              <FaGithub className="mr-2" /> View Github
            </a> */}
          </div>
          {/* </div> */}
        </div>

        {/* Experience Section */}
        <ExperienceComponent />
      </section>
    </main>
  );
};

export default About;
