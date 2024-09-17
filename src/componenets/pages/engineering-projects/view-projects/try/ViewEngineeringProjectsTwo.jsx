import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewEngineeringProjectsTwo.css";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

// Import the major project JSON files
import majorProjectsEsp32Data from "../../../../data/Projects IOT/major/engg-projects-iot-esp-major.json";
import majorProjectsArdiunoData from "../../../../data/Projects IOT/major/engg-projects-iot-arduino-major.json";
import majorProjectsRasspberryData from "../../../../data/Projects IOT/major/engg-projects-iot-raspberry-pi-major.json";
import majorProjectsAiMlData from "../../../../data/projects aiml/major/engg-projects-ai-ml-major.json";
import majorProjectsJavaPythonData from "../../../../data/projects PyJa/major/engg-projects-python-java-major.json";

// Import the mini project JSON files

import miniProjectsEsp32Data from "../../../../data/Projects IOT/mini/engg-projects-iot-esp-mini.json";
import miniProjectsArdiunoData from "../../../../data/Projects IOT/mini/engg-projects-iot-arduino-mini.json";
import miniProjectsRasspberryData from "../../../../data/Projects IOT/mini/engg-projects-iot-raspberry-pi-mini.json";
import miniProjectsAiMlData from "../../../../data/projects aiml/mini/engg-projects-ai-ml-mini.json";
import miniProjectsJavaPythonData from "../../../../data/projects PyJa/mini/engg-projects-python-java-mini.json";

function ViewEngineeringProjectsTwo() {
  const { projectType, domainType } = useParams();
  const [tableData, setTableData] = useState([]);
  const [selectedSubdomain, setSelectedSubdomain] = useState(null); // No initial selection
  const navigate = useNavigate();

  useEffect(() => {
    const fullProjectType = `${projectType}/domain/${domainType}`;
    let data = [];

    if (fullProjectType === "major-projects/domain/iot") {
      if (selectedSubdomain === null) {
        // Show all projects if no filter is selected
        data = [
          ...majorProjectsEsp32Data.projects.map((project) => ({
            ...project,
            subdomain: majorProjectsEsp32Data.subdomain,
          })),
          ...majorProjectsArdiunoData.projects.map((project) => ({
            ...project,
            subdomain: majorProjectsArdiunoData.subdomain,
          })),
          ...majorProjectsRasspberryData.projects.map((project) => ({
            ...project,
            subdomain: majorProjectsRasspberryData.subdomain,
          })),
        ];
      } else if (selectedSubdomain === "Ardiuno") {
        data = majorProjectsArdiunoData.projects.map((project) => ({
          ...project,
          subdomain: majorProjectsArdiunoData.subdomain,
        }));
      } else if (selectedSubdomain === "ESP8266-ESP32") {
        data = majorProjectsEsp32Data.projects.map((project) => ({
          ...project,
          subdomain: majorProjectsEsp32Data.subdomain,
        }));
      } else if (selectedSubdomain === "Raspberry-Pi") {
        data = majorProjectsRasspberryData.projects.map((project) => ({
          ...project,
          subdomain: majorProjectsRasspberryData.subdomain,
        }));
      }
    } else if (fullProjectType === "major-projects/domain/ai&ml") {
      data = majorProjectsAiMlData.projects.map((project) => ({
        ...project,
        subdomain: majorProjectsAiMlData.subdomain,
      }));
    } else if (fullProjectType === "major-projects/domain/python-and-java") {
      data = majorProjectsJavaPythonData.projects.map((project) => ({
        ...project,
        subdomain: majorProjectsJavaPythonData.subdomain,
      }));
    }

    if (fullProjectType === "mini-projects/domain/iot") {
      if (selectedSubdomain === null) {
        // Show all projects if no filter is selected
        data = [
          ...miniProjectsEsp32Data.projects.map((project) => ({
            ...project,
            subdomain: miniProjectsEsp32Data.subdomain,
          })),
          ...miniProjectsArdiunoData.projects.map((project) => ({
            ...project,
            subdomain: miniProjectsArdiunoData.subdomain,
          })),
          ...miniProjectsRasspberryData.projects.map((project) => ({
            ...project,
            subdomain: miniProjectsRasspberryData.subdomain,
          })),
        ];
      } else if (selectedSubdomain === "Ardiuno") {
        data = miniProjectsArdiunoData.projects.map((project) => ({
          ...project,
          subdomain: miniProjectsArdiunoData.subdomain,
        }));
      } else if (selectedSubdomain === "ESP8266-ESP32") {
        data = miniProjectsEsp32Data.projects.map((project) => ({
          ...project,
          subdomain: miniProjectsEsp32Data.subdomain,
        }));
      } else if (selectedSubdomain === "Raspberry-Pi") {
        data = miniProjectsRasspberryData.projects.map((project) => ({
          ...project,
          subdomain: miniProjectsRasspberryData.subdomain,
        }));
      }
    } else if (fullProjectType === "mini-projects/domain/ai&ml") {
      data = miniProjectsAiMlData.projects.map((project) => ({
        ...project,
        subdomain: miniProjectsAiMlData.subdomain,
      }));
    } else if (fullProjectType === "mini-projects/domain/python-and-java") {
      data = miniProjectsJavaPythonData.projects.map((project) => ({
        ...project,
        subdomain: miniProjectsJavaPythonData.subdomain,
      }));
    }

    setTableData(data);
  }, [projectType, domainType, selectedSubdomain]);

  const handleKnowMore = (project) => {
    const url = `/engineering/${domainType}/${encodeURIComponent(
      project.title
    )}`;
    const newTab = window.open(url, "_blank"); // Open the URL in a new tab

    if (newTab) {
      newTab.focus(); // Bring the new tab into focus
    }
  };

  const fullProjectType = `${projectType}/domain/${domainType}`;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl text-center font-bold mb-4">
        {`${projectType.replace(/-/g, " ")} - ${domainType.replace(/-/g, " ")}`}
        List
      </h2>
      {fullProjectType === "major-projects/domain/iot" && (
        <Dropdown onSelect={(selected) => setSelectedSubdomain(selected)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedSubdomain || "Select Subdomain"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey={null}>All</Dropdown.Item>
            <Dropdown.Item eventKey="Ardiuno">Ardiuno</Dropdown.Item>
            <Dropdown.Item eventKey="ESP8266-ESP32">
              ESP8266 ESP32
            </Dropdown.Item>
            <Dropdown.Item eventKey="Raspberry-Pi">Raspberry Pi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      <div className="flex flex-wrap items-center justify-center">
        {tableData.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          tableData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
              <Card
                className="bg-white shadow-lg cursor-pointer flex flex-col"
                onClick={() => handleKnowMore(item)}
              >
                <Card.Img
                  variant="top"
                  src={
                    item.imgSrc ||
                    `/images/defalut-images/${item.subdomain}.jpg`
                  }
                  className="object-cover w-full flex-shrink-0 h-60" // Ensure images do not grow but maintain fixed height
                />
                <Card.Body className="flex-1 flex flex-col p-4">
                  <Card.Title className="text-lg font-semibold mb-2">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-sm mb-1">{item.code}</Card.Text>
                  <Card.Text className="text-sm">{item.subdomain}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewEngineeringProjectsTwo;
