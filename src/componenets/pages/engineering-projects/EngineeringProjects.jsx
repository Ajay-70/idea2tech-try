import React from "react";
import { useNavigate } from "react-router";
import "./EngineeringProjects.css";

const ProjectCard = ({ imageSrc, altText, title, description }) => {
  const navigate = useNavigate();

  const handleKnowMore = (title) => {
    const projectType = title.toLowerCase().replace(" ", "-");
    navigate(`/engineering/browse-projects-list/${projectType}`);
  };

  return (
    <div className="ProjectsCard lg:m-5 shadow-lg">
      <img className="w-full h-80" src={imageSrc} alt={altText} />
      <div className="px-6 py-4">
        <div className="font-bold text-3xl underline mb-4">{title}</div>
        <p className="text-gray-700 font-normal text-base">{description}</p>
        <button
          className="inline-block w-auto text-center min-w-[200px] px-6 my-5 py-3 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-[#5d6dff] to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px"
          onClick={() => handleKnowMore(title)}
        >
          Browse Projects List
        </button>
      </div>
    </div>
  );
};

function EngineeringProjects() {
  return (
    <div>
      <h1 className="hero-heading text-center text-4xl font-bold my-5">
        Build Real-World Projects With idea2tech
      </h1>
      <p className="hero-content text-center font-medium">
        "At Idea2tech, we provide specialized mini and major project services
        tailored for engineering students. Our mission is to support and guide
        students through their project journey, helping them develop practical
        skills and achieve academic excellence. With hands-on assistance and
        expert advice, we ensure that students are well-prepared for real-world
        challenges and success."
      </p>
      <div className="project-cards-container flex flex-wrap px-3 py-3 justify-center items-center">
        <ProjectCard
          imageSrc="/images/eng-projects.jpeg"
          altText="mini projects"
          title="Mini Projects"
          description="Mini projects are designed to give students a hands-on experience with smaller-scale projects that typically span a shorter duration. These projects help students develop their practical skills, apply theoretical knowledge, and get a taste of real-world problem-solving. Ideal for those looking to enhance their understanding of core concepts and build a strong foundation."
        />
        <ProjectCard
          imageSrc="/images/eng-projects-major.jpeg"
          altText="major projects"
          title="Major Projects"
          description="Major projects are comprehensive, large-scale projects that often involve in-depth research, extensive development, and detailed documentation. These projects are intended to simulate real-world industry challenges, providing students with valuable experience in project management, teamwork, and advanced technical skills."
        />
      </div>
    </div>
  );
}

export default EngineeringProjects;
