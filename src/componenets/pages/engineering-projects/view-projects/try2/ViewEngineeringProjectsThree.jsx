import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewEngineeringProjectsThree.css";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";


// // Import project JSON files
// // Electrical projects
import MicroControllerBasedProjects from "../../../../data/Projects Content/Projects Content/Electrical Projects/Micro Controller Based Projects.json";
import nonMicroControllerBasedProjects from "../../../../data/Projects Content/Projects Content/Electrical Projects/Non Micro Controller Based Projects.json";

// // IOT and Embedded Projects 
import ArduinoAndroidProjects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Android Based Projects.json";
import DigitalCompassBasedProjects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Digital Compass Based Projects.json";
import ElectronicsBasedProjects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Electronics Based Projects.json";
import FingerPrintbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Finger Print Based Projects.json";
import GlobalPositioningSystemGPSbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Global Positioning System (GPS) based projects.json";
import GlobalSystemforMobilecommunicationGSMbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Global System for Mobile communication (GSM) based projects.json";
import Heartbeatsensorbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Heart-beat sensor based projects.json";
import IOTbasedProjects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/IOT based Projects.json";
import MEMSAccelerometerbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/MEMS Accelerometer Based Projects.json";
import RFIDorSmartcardIButtonbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/RFID or Smart card, I-Button based projects.json";
import Roboticsbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Robotics Based Projects.json";
import TongueDrivesAssistiveTechnologyHalleffectsensorbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Tongue Drives Assistive Technology (Hall-effect sensor) based projects.json";
import TouchscreenHapticsbasedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Touch screen (Haptics) based projects.json";
import WirelesscommunicationZigbeeRFDTMFCC2500basedprojects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Arduino and ESP8266, ESP32 Projects/Wireless communication (Zigbee, RF, DTMF, CC2500) based projects.json";

// // Raspberry Pi Projects 
import RaspberryPiProjects from "../../../../data/Projects Content/Projects Content/Electronics Projects/IOT and Embedded Projects/Raspbeery Pi Projects/Raspberry Pi Projects.json";

// // MATLAB Projects 
import MATLABProjects from "../../../../data/Projects Content/Projects Content/Electronics Projects/MATLAB Projects/MATLAB Projects.json";

// // AI, ML, and DL projects 
import AIMLandDLProjects from "../../../../data/Projects Content/Projects Content/Software Projects/AI,ML and DL projects/AI,ML and DL Projects.json";

// // Java Projects
import CloudComputingProjects from "../../../../data/Projects Content/Projects Content/Software Projects/Java Projects/Java Projects/Cloud Computing Projects.json";
import DataMiningorKnowledgeandDataEngineeringProjects from "../../../../data/Projects Content/Projects Content/Software Projects/Java Projects/Java Projects/Data Mining or Knowledge and Data Engineering Projects.json";
import Java from "../../../../data/Projects Content/Projects Content/Software Projects/Java Projects/Java Projects/Java.json";
import SecureorServiceComputing from "../../../../data/Projects Content/Projects Content/Software Projects/Java Projects/Java Projects/Secure or Service Computing.json";

// // Java Web Application
import JavaWebApplication from "../../../../data/Projects Content/Projects Content/Software Projects/Java Projects/Java Web Application/Java Web Application.json";

// // Python projects
import PythonProject from "../../../../data/Projects Content/Projects Content/Software Projects/Python projects/Python Projects.json";



// mechanical projects
import AgricultureProjects from "../../../../data/Projects Content/Projects Content/Mechanical Projects/Agriculture Projects.json";
import AutomaticPneumaticsProjects from "../../../../data/Projects Content/Projects Content/Mechanical Projects/AUTOMATED & PNEUMATICS Projects.json"
import AutomobileProjects from "../../../../data/Projects Content/Projects Content/Mechanical Projects/Automobile Projects.json";
import ManufacturingProjects from "../../../../data/Projects Content/Projects Content/Mechanical Projects/Automobile Projects.json";
import MechanicalLowCostProjects from "../../../../data/Projects Content/Projects Content/Mechanical Projects/Automobile Projects.json";
import MECHATORNICSROBOTICS from "../../../../data/Projects Content/Projects Content/Mechanical Projects/Automobile Projects.json";
import PowerGenerationUsingMechanicalComponents from "../../../../data/Projects Content/Projects Content/Mechanical Projects/Automobile Projects.json";


const DOMAIN_CONFIGS = {
  electronics: {
    'iot-&-embedded-projects': {
      subdomains: [
        "Arduino and ESP8266, ESP32 Projects",
        "Raspberry Pi Projects"
      ],
      subSubdomains: {
        "Arduino and ESP8266, ESP32 Projects": [
          "Android Based Projects",
          "Digital Compass Based Projects",
          "Electronics Based Projects",
          "Finger Print based projects",
          "Global Positioning System (GPS) based projects",
          "Global System for Mobile communication (GSM) based projects",
          "Heart-beat sensor based projects",
          "IOT based Projects",
          "MEMS Accelerometer based projects",
          "RFID or Smart card, I-Button based projects",
          "Robotics based projects",
          "Tongue Drives Assistive Technology (Hall-effect sensor) based projects",
          "Touch screen (Haptics) based projects",
          "Wireless communication (Zigbee, RF, DTMF, CC2500) based projects"


        ]
      }
    }
  },
  software: {
    'java-projects': {
      subdomains: [
        "Java Based Projects",
        "Java web Based Projects"
      ],
      subSubdomains: {
        "Java Based Projects": [
          "Java",
          "Cloud Computing Projects",
          "Data Mining or Knowledge and Data Engineering Projects",
          "Secure or Service Computing"
        ]
      }
    }
  }
};

function ViewEngineeringProjectsThree() {
  const { projectType, domainType } = useParams();
  const [tableData, setTableData] = useState([]);
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);
  const [selectedSubSubdomain, setSelectedSubSubdomain] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let data = [];

      try {
        if (projectType === "electronics" && domainType === "iot-&-embedded-projects") {
          if (!selectedSubdomain && !selectedSubSubdomain) {
            const subdomainData = [
              ArduinoAndroidProjects,
              DigitalCompassBasedProjects,
              ElectronicsBasedProjects,
              FingerPrintbasedprojects,
              GlobalPositioningSystemGPSbasedprojects,
              GlobalSystemforMobilecommunicationGSMbasedprojects,
              Heartbeatsensorbasedprojects,
              IOTbasedProjects,
              MEMSAccelerometerbasedprojects,
              RFIDorSmartcardIButtonbasedprojects,
              Roboticsbasedprojects,
              TongueDrivesAssistiveTechnologyHalleffectsensorbasedprojects,
              TouchscreenHapticsbasedprojects,
              WirelesscommunicationZigbeeRFDTMFCC2500basedprojects,
              RaspberryPiProjects
            ];
            data = subdomainData.flatMap(subdomainObj =>
              subdomainObj.projects.map(project => ({ ...project, subdomain: subdomainObj.subdomain }))
            );
          } else if (selectedSubdomain === "Arduino and ESP8266, ESP32 Projects") {
            if (!selectedSubSubdomain) {
              const subdomainData = [
                ArduinoAndroidProjects,
                DigitalCompassBasedProjects,
                ElectronicsBasedProjects,
                FingerPrintbasedprojects,
                GlobalPositioningSystemGPSbasedprojects,
                GlobalSystemforMobilecommunicationGSMbasedprojects,
                Heartbeatsensorbasedprojects,
                IOTbasedProjects,
                MEMSAccelerometerbasedprojects,
                RFIDorSmartcardIButtonbasedprojects,
                Roboticsbasedprojects,
                TongueDrivesAssistiveTechnologyHalleffectsensorbasedprojects,
                TouchscreenHapticsbasedprojects,
                WirelesscommunicationZigbeeRFDTMFCC2500basedprojects,

              ];
              data = subdomainData.flatMap(subdomainObj =>
                subdomainObj.projects.map(project => ({ ...project, subdomain: subdomainObj.subdomain }))
              );
            } else {
              const dataMap = {
                "Android Based Projects": ArduinoAndroidProjects,
                "Digital Compass Based Projects": DigitalCompassBasedProjects,
                "Electronics Based Projects": ElectronicsBasedProjects,

              };
              data = (dataMap[selectedSubSubdomain]?.projects || []).map(project => ({
                ...project,
                subdomain: dataMap[selectedSubSubdomain]?.subdomain
              }));
            }
          } else if (selectedSubdomain === "Raspberry Pi Projects") {
            data = RaspberryPiProjects.projects.map(project => ({ ...project, subdomain: RaspberryPiProjects.subdomain }));
          }
        }

        if (projectType === "software" && domainType === "java-projects") {
          if (!selectedSubdomain && !selectedSubSubdomain) {
            data = [
              ...Java.projects.map(project => ({ ...project, subdomain: Java.subdomain })),
              ...CloudComputingProjects.projects.map(project => ({ ...project, subdomain: CloudComputingProjects.subdomain })),
              ...DataMiningorKnowledgeandDataEngineeringProjects.projects.map(project => ({ ...project, subdomain: DataMiningorKnowledgeandDataEngineeringProjects.subdomain })),
              // Add other project categories here
            ];
          }

        }

        const projectTypeMap = {
          'electrical': {
            'micro-controller-based-projects': MicroControllerBasedProjects,
            'non-micro-controller-based-projects': nonMicroControllerBasedProjects
          },
          'software': {
            'python-projects': PythonProject,
            'ai-&-ml-projects': AIMLandDLProjects
          },
          'mechanical': {
            'automobile-projects': AutomobileProjects,
            'manufacturing-projects': ManufacturingProjects,
            'automated-&-pneumatics-projects': AutomaticPneumaticsProjects,
            'agricultural-projects': AgricultureProjects,
            'robotics-&-mechatronics-projects': MECHATORNICSROBOTICS,
            'power-generation': PowerGenerationUsingMechanicalComponents
          },
          'electronics': {
            'matlab-projects': MATLABProjects,

          }
        };

        if (!data.length && projectTypeMap[projectType]?.[domainType]) {
          data = projectTypeMap[projectType][domainType].projects.map(project => ({
            ...project,
            subdomain: projectTypeMap[projectType][domainType].subdomain
          }));
        }

        setTableData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, [projectType, domainType, selectedSubdomain, selectedSubSubdomain]);




  const handleSubdomainChange = (subdomain) => {
    setSelectedSubdomain(subdomain);
    setSelectedSubSubdomain(null);
    navigate(`/engineering/${projectType}/${domainType}/${subdomain.replace(/ /g, '-')}`);
  };

  const handleSubSubdomainChange = (subSubdomain) => {
    setSelectedSubSubdomain(subSubdomain);
    navigate(`/engineering/${projectType}/${domainType}/${selectedSubdomain.replace(/ /g, '-')}/${subSubdomain.replace(/ /g, '-')}`);
  };

  return (
    <div className="view-projects-container">
      <h2 className="text-center h1 p-3">Engineering Projects</h2>

      {DOMAIN_CONFIGS[projectType]?.[domainType] && (
        <div className="d-flex mx-2">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedSubdomain || "Select a Subdomain"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {DOMAIN_CONFIGS[projectType][domainType].subdomains.map((subdomain) => (
                <Dropdown.Item key={subdomain} onClick={() => handleSubdomainChange(subdomain)}>
                  {subdomain}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {selectedSubdomain && DOMAIN_CONFIGS[projectType][domainType].subSubdomains[selectedSubdomain] && (
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-sub-basic">
                {selectedSubSubdomain || "Select a Sub-Subdomain"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {DOMAIN_CONFIGS[projectType][domainType].subSubdomains[selectedSubdomain].map((subSubdomain) => (
                  <Dropdown.Item key={subSubdomain} onClick={() => handleSubSubdomainChange(subSubdomain)}>
                    {subSubdomain}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center container justify-center">
        {tableData.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          tableData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
              <Card className="bg-white shadow-lg cursor-pointer flex flex-col">
                <Card.Img
                  variant="top"
                  src={item.imgSrc || `/sub-sub-domain-imgs/${item.subdomain}.jpg`}
                  className="object-cover w-full flex-shrink-0 h-60"
                />
                <Card.Body className="flex-1 flex flex-col p-4">
                  <Card.Title className="text-lg font-semibold mb-2">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-sm mb-1">{item.code}</Card.Text>
                  <Card.Text className="text-sm">
                    {item.subdomain}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewEngineeringProjectsThree;

