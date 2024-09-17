import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./DetailedProjectView.css";
import StudentDataForm from "../../../../forms/StudentDataForm";
import PackageInclusions from "../../../../designs for homepage/PackageInclusions";

// Import project JSON files
import majorProjectsEsp32Data from "../../../../data/Projects IOT/major/engg-projects-iot-esp-major.json";
import majorProjectsArdiunoData from "../../../../data/Projects IOT/major/engg-projects-iot-arduino-major.json";
import majorProjectsRasspberryData from "../../../../data/Projects IOT/major/engg-projects-iot-raspberry-pi-major.json";
import majorProjectsAiMlData from "../../../../data/projects aiml/major/engg-projects-ai-ml-major.json";
import majorProjectsJavaPythonData from "../../../../data/projects PyJa/major/engg-projects-python-java-major.json";
import miniProjectsEsp32Data from "../../../../data/Projects IOT/mini/engg-projects-iot-esp-mini.json";
import miniProjectsArdiunoData from "../../../../data/Projects IOT/mini/engg-projects-iot-arduino-mini.json";
import miniProjectsRasspberryData from "../../../../data/Projects IOT/mini/engg-projects-iot-raspberry-pi-mini.json";
import miniProjectsAiMlData from "../../../../data/projects aiml/mini/engg-projects-ai-ml-mini.json";
import miniProjectsJavaPythonData from "../../../../data/projects PyJa/mini/engg-projects-python-java-mini.json";

// Data source mapping
const majorProjectsData = {
  iot: {
    Ardiuno: majorProjectsArdiunoData,
    "ESP8266-ESP32": majorProjectsEsp32Data,
    "Raspberry-Pi": majorProjectsRasspberryData,
  },
  "ai&ml": majorProjectsAiMlData,
  "python-and-java": majorProjectsJavaPythonData,
};

const miniProjectsData = {
  iot: {
    Ardiuno: miniProjectsArdiunoData,
    "ESP8266-ESP32": miniProjectsEsp32Data,
    "Raspberry-Pi": miniProjectsRasspberryData,
  },
  "ai&ml": miniProjectsAiMlData,
  "python-and-java": miniProjectsJavaPythonData,
};

// Helper function to format the key titles
function formatKey(key) {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Handle camelCase
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
}

// Component to render each technical specification item
function renderTechSpecItem(key, value) {
  if (Array.isArray(value)) {
    return (
      <li key={key}>
        <strong>{formatKey(key)}:</strong>
        <ul className="ml-4 list-disc">
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>
    );
  } else if (typeof value === "object") {
    return (
      <li key={key}>
        <strong>{formatKey(key)}:</strong>
        <ul className="ml-4 list-disc">
          {Object.entries(value).map(([subKey, subValue]) => (
            <li key={subKey}>
              <strong>{formatKey(subKey)}:</strong> {subValue}
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li key={key}>
        <strong>{formatKey(key)}:</strong> {value}
      </li>
    );
  }
}

function DetailedProjectView() {
  const location = useLocation();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjectDataFromUrl = () => {
      if (location.state?.project) {
        setProject(location.state.project);
        setLoading(false);
        return;
      }

      const urlParts = location.pathname
        .split("/")
        .filter((part) => part.length > 0);
      if (urlParts.length < 6) {
        setError("URL format is incorrect");
        setLoading(false);
        return;
      }

      const projectType = urlParts[1]; // 'major-projects' or 'mini-projects'
      const domain = urlParts[3]; // 'iot', 'ai&ml', 'python-and-java'
      const technology = decodeURIComponent(urlParts[4]); // 'Ardiuno', 'ESP8266-ESP32', etc.
      const projectTitle = decodeURIComponent(urlParts.slice(5).join(" ")); // Project title

      console.log({ projectType, domainType, subdomain, projectTitle });

      const projectData =
        projectType === "major-projects" ? majorProjectsData : miniProjectsData;
      const domainData = projectData[domain];

      if (!domainData) {
        setError("Domain data not found");
        setLoading(false);
        return;
      }

      const techData = domainData[technology];

      if (!techData) {
        setError("Technology data not found");
        setLoading(false);
        return;
      }

      const foundProject = techData.find((p) => p.title === projectTitle);

      if (foundProject) {
        setProject(foundProject);
      } else {
        setError("Project not found");
      }
      setLoading(false);
    };

    getProjectDataFromUrl();
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const techSpecs = project.technical_specifications || {};

  return (
    <div className="detail-project-view">
      {/* Project Title */}
      <h1 className="capitalize project-title pb-2 border-b-4 m-5 text-center">
        {project.title}
      </h1>

      {/* Hero Image */}
      <div className="hero-image">
        <img
          className="onlyimage mt-4"
          src={
            project.imgSrc ||
            `/images/default-images/${project.subdomain || "default"}.jpg`
          }
          alt={`Image for project: ${project.title}`}
        />
      </div>

      {/* Project Details */}
      <div className="project-disc">
        <h2 className="font-bold">Abstract:</h2>
        <p>{project.abstract}</p>
        <br />

        {/* Key Features */}
        {project.key_features?.length > 0 && (
          <>
            <h2 className="font-bold">Key Features:</h2>
            <ul className="list-disc">
              {project.key_features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {/* Benefits */}
        {project.benefits?.length > 0 && (
          <>
            <h2 className="font-bold py-2">Benefits:</h2>
            <ul className="list-disc">
              {project.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </>
        )}

        {/* Technical Specifications */}
        {Object.keys(techSpecs).length > 0 && (
          <>
            <h2 className="font-bold py-2">Technical Specifications:</h2>
            <ul className="list-disc">
              {Object.entries(techSpecs).map(([key, value]) =>
                renderTechSpecItem(key, value)
              )}
            </ul>
          </>
        )}
      </div>

      {/* Student Data Form */}
      <PackageInclusions />
      <div className="center-container">
        <h1 className="fill-form">
          “Transform Your Ideas into Reality!
          <br /> Just a Quick Form, and
          <br /> Our Team Will Be in Touch Shortly to Help You Get Started.”
        </h1>
      </div>

      <StudentDataForm code={project.code} title={project.title} />
    </div>
  );
}

export default DetailedProjectView;
