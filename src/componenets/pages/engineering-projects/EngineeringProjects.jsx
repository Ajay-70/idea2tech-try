import React from "react";
import { useNavigate } from "react-router";
import "./EngineeringProjects.css";

const ProjectCard = ({ imageSrc, altText, title, description }) => {
  const navigate = useNavigate();

  const handleKnowMore = (title) => {
    const projectType = title.toLowerCase().replace(" ", "-");
    navigate(`/engineering/${projectType}/domains`);
  };

  return (
    <div className="ProjectsCard card-details  shadow-lg">
      <img className="w-full h-80" src={imageSrc} alt={altText} />
      <div className="card-content py-1">
        <div className="font-bold card-heading underline mb-1">{title}</div>
        <p className="text-gray-700 card-disc font-normal text-base">
          {description}
        </p>
        <button
          className="inline-block w-auto text-center min-w-[200px] px-6 my-1 mb-2 py-3 text-white transition-all rounded-md shadow-xl sm:w-auto bg-[#3C9AF5] hover:bg-[#5d6dff]  hover:shadow-2xl  hover:-translate-y-px"
          onClick={() => handleKnowMore(title)}
        >
          Browse Projects Domains
        </button>
      </div>
    </div>
  );
};

function EngineeringProjects() {
  return (
    <div>
      <h1 className="hero-heading text-center  font-bold ">
        Build Real-World Projects With idea2tech
      </h1>
      <p className="hero-content text-center font-medium ">
        "At Idea2tech, we provide specialized mini and major project services
        tailored for engineering students. Our mission is to support and guide
        students through their project journey, helping them develop practical
        skills and achieve academic excellence. With hands-on assistance and
        expert advice, we ensure that students are well-prepared for real-world
        challenges and success."
      </p>
      <div className="project-cards-container flex flex-wrap  justify-center items-center">
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
