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




function ViewEngineeringProjectsThree() {
  const { projectType, domainType } = useParams();
  const [tableData, setTableData] = useState([]);
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);
  const [selectedSubSubdomain, setSelectedSubSubdomain] = useState(null);
  const navigate = useNavigate();
  console.log(`selectedSubdomain  ${selectedSubdomain}`);
  console.log(`selectedSubSubdomain  ${selectedSubSubdomain}`);

  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      console.log(`Fetching data for projectType: ${projectType}, domainType: ${domainType}`);

      try {
        // Check if projectType and domainType match the condition
        if (projectType === "electronics" && domainType === "iot-&-embedded-projects") {

          if (!selectedSubSubdomain) {
            data = [
              ...ArduinoAndroidProjects.projects,
              ...DigitalCompassBasedProjects.projects,
              ...ElectronicsBasedProjects.projects,
              ...FingerPrintbasedprojects.projects,
              ...GlobalPositioningSystemGPSbasedprojects.projects,
              ...GlobalSystemforMobilecommunicationGSMbasedprojects.projects,
              ...Heartbeatsensorbasedprojects.projects,
              ...IOTbasedProjects.projects,
              ...MEMSAccelerometerbasedprojects.projects,
              ...RFIDorSmartcardIButtonbasedprojects.projects,
              ...Roboticsbasedprojects.projects,
              ...TongueDrivesAssistiveTechnologyHalleffectsensorbasedprojects.projects,
              ...TouchscreenHapticsbasedprojects.projects,
              ...WirelesscommunicationZigbeeRFDTMFCC2500basedprojects.projects
            ];
          }

          // Load data based on selectedSubdomain and selectedSubSubdomain
          if (selectedSubdomain === "Arduino and ESP8266, ESP32 Projects") {

            // Load all related projects if no specific sub-subdomain is selected
            if (!selectedSubSubdomain) {
              data = [
                ...ArduinoAndroidProjects.projects,
                ...DigitalCompassBasedProjects.projects,
                ...ElectronicsBasedProjects.projects,
                ...FingerPrintbasedprojects.projects,
                ...GlobalPositioningSystemGPSbasedprojects.projects,
                ...GlobalSystemforMobilecommunicationGSMbasedprojects.projects,
                ...Heartbeatsensorbasedprojects.projects,
                ...IOTbasedProjects.projects,
                ...MEMSAccelerometerbasedprojects.projects,
                ...RFIDorSmartcardIButtonbasedprojects.projects,
                ...Roboticsbasedprojects.projects,
                ...TongueDrivesAssistiveTechnologyHalleffectsensorbasedprojects.projects,
                ...TouchscreenHapticsbasedprojects.projects,
                ...WirelesscommunicationZigbeeRFDTMFCC2500basedprojects.projects
              ];
            }
            else {
              // Load projects based on specific selectedSubSubdomain
              switch (selectedSubSubdomain) {
                case "Android Based Projects":
                  data = ArduinoAndroidProjects.projects;
                  break;
                case "Digital Compass Based Projects":
                  data = DigitalCompassBasedProjects.projects;
                  break;
                case "Electronics Based Projects":
                  data = ElectronicsBasedProjects.projects;
                  break;
                case "Finger Print Based Projects":
                  data = FingerPrintbasedprojects.projects;
                  break;
                case "Global Positioning System GPS Based Projects":
                  data = GlobalPositioningSystemGPSbasedprojects.projects;
                  break;
                case "Global System for Mobile Communication GSM Based Projects":
                  data = GlobalSystemforMobilecommunicationGSMbasedprojects.projects;
                  break;
                case "Heart Beat Sensor Based Projects":
                  data = Heartbeatsensorbasedprojects.projects;
                  break;
                case "Robotics Based Projects":
                  data = Roboticsbasedprojects.projects;
                  break;
                case "IOT Based Projects":
                  data = IOTbasedProjects.projects;
                  break;
                case "MEMS Accelerometer Based Projects":
                  data = MEMSAccelerometerbasedprojects.projects;
                  break;
                case "RFID or Smart Card I Button Based Projects":
                  data = RFIDorSmartcardIButtonbasedprojects.projects;
                  break;
                case "Tongue Drives Assistive Technology Hall Effect Sensor Based Projects":
                  data = TongueDrivesAssistiveTechnologyHalleffectsensorbasedprojects.projects;
                  break;
                case "Touch Screen Haptics Based Projects":
                  data = TouchscreenHapticsbasedprojects.projects;
                  break;
                case "Wireless Communication Zigbee RF DTMF CC2500 Based Projects":
                  data = WirelesscommunicationZigbeeRFDTMFCC2500basedprojects.projects;
                  break;
                default:
                  console.warn(`Unknown sub-subdomain: ${selectedSubSubdomain}`);
              }
            }
          }
          else if (selectedSubdomain === "Raspberry Pi Projects") {
            data = RaspberryPiProjects.projects;
          }

          // Log filtered data for confirmation
          console.log("Final data:", data);
        }
        if (projectType === "electrical" && domainType === "micro-controller-based-projects") {
          data = MicroControllerBasedProjects.projects;
        }
        if (projectType === "electrical" && domainType === "non-micro-controller-based-projects") {
          data = nonMicroControllerBasedProjects.projects;
        }
        if (projectType === "software", domainType === "python-projects") {
          data = PythonProject.projects;
        } if (projectType === "software", domainType === "ai-&-ml-projects") {
          data = AIMLandDLProjects.projects;
        }
        if (projectType === "software" && domainType === "java-projects") {

          if (!selectedSubSubdomain) {
            data = [
              ...Java.projects,
              ...CloudComputingProjects.projects,
              ...DataMiningorKnowledgeandDataEngineeringProjects.projects,
              ...SecureorServiceComputing.projects,
              ...JavaWebApplication.projects
            ];
          }

          // Load data based on selectedSubdomain and selectedSubSubdomain
          if (selectedSubdomain === "Java Based Projects") {

            // Load all related projects if no specific sub-subdomain is selected
            if (!selectedSubSubdomain) {
              data = [
                ...Java.projects,
                ...CloudComputingProjects.projects,
                ...DataMiningorKnowledgeandDataEngineeringProjects.projects,
                ...SecureorServiceComputing.projects
              ];
            }
            else {
              // Load projects based on specific selectedSubSubdomain
              switch (selectedSubSubdomain) {
                case "Cloud Computing Projects":
                  data = CloudComputingProjects.projects;
                  break;
                case "Data Mining or Knowledge and Data Engineering Projects":
                  data = DataMiningorKnowledgeandDataEngineeringProjects.projects;
                  break;
                case "Java":
                  data = Java.projects;
                  break;
                case "Secure or Service Computing":
                  data = SecureorServiceComputing.projects;
                  break;
              }
            }
          }
          else if (selectedSubdomain === "Java web Based Projects") {
            data = JavaWebApplication.projects;
          }

          // Log filtered data for confirmation
          console.log("Final data:", data);
        }


        // Set the final data
        setTableData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, [projectType, domainType, selectedSubdomain, selectedSubSubdomain]);


  const handleSubdomainChange = (subdomain) => {
    setSelectedSubdomain(subdomain);
    setSelectedSubSubdomain(null); // Reset sub-subdomain
    const separator = '-'; // Change this to '_' if you prefer underscores

    // Construct URL with optional `subdomain`
    const formattedPath = `/engineering/${projectType}/${domainType}${subdomain ? `/${subdomain.replace(/ /g, separator)}` : ''}`;

    navigate(formattedPath);
    console.log(subdomain);
  };

  const handleSubSubdomainChange = (subSubdomain) => {
    setSelectedSubSubdomain(subSubdomain);
    const separator = '-'; // Change this to '_' if you prefer underscores

    // Construct URL with optional `subdomain` and `subSubdomain`
    const formattedPath = `/engineering/${projectType}/${domainType}${selectedSubdomain ? `/${selectedSubdomain.replace(/ /g, separator)}` : ''}${subSubdomain ? `/${subSubdomain.replace(/ /g, separator)}` : ''}`;

    navigate(formattedPath);
  };



  return (
    <div className="view-projects-container">
      <h2 className="text-center h1 p-3">Engineering Projects</h2>
      <div className="d-flex mx-2">
        {projectType === "electronics" && domainType === "iot-&-embedded-projects" && (
          <>
            <Dropdown className="">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedSubdomain || "Select a Subdomain"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSubdomainChange("Arduino and ESP8266, ESP32 Projects")}>
                  Arduino and ESP8266, ESP32 Projects
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSubdomainChange("Raspberry Pi Projects")}>
                  Raspberry Pi Projects
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {selectedSubdomain === "Arduino and ESP8266, ESP32 Projects" && (
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-sub-basic">
                  {selectedSubSubdomain || "Select a Sub-Subdomain"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Android Based Projects")}>Android Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Digital Compass Based Projects")}>Digital Compass Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Electronics Based Projects")}>Electronics Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Finger Print Based Projects")}>Finger Print Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Global Positioning System GPS Based Projects")}>Global Positioning System GPS Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Global System for Mobile Communication GSM Based Projects")}>Global System for Mobile Communication GSM Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Heart Beat Sensor Based Projects")}>Heart Beat Sensor Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Robotics Based Projects")}>Robotics Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("IOT Based Projects")}>IOT Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("MEMS Accelerometer Based Projects")}>MEMS Accelerometer Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("RFID or Smart Card I Button Based Projects")}>RFID or Smart Card I Button Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Tongue Drives Assistive Technology Hall Effect Sensor Based Projects")}>Tongue Drives Assistive Technology Hall Effect Sensor Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Touch Screen Haptics Based Projects")}>Touch Screen Haptics Based Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Wireless Communication Zigbee RF DTMF CC2500 Based Projects")}>Wireless Communication Zigbee RF DTMF CC2500 Based Projects</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </>
        )}
        {projectType === "software" && domainType === "java-projects" && (
          <>
            <Dropdown className="">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedSubdomain || "Select a Subdomain"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSubdomainChange("Java Based Projects")}>
                  Java Based Projects
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSubdomainChange("Java web Based Projects")}>
                  Java web Based Projects
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {selectedSubdomain === "Java Based Projects" && (
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-sub-basic">
                  {selectedSubSubdomain || "Select a Sub-Subdomain"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Java")}>Java</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Cloud Computing Projects")}>Cloud Computing Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Data Mining or Knowledge and Data Engineering Projects")}>Data Mining or Knowledge and Data Engineering Projects</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSubSubdomainChange("Secure or Service Computing")}>Secure or Service Computing</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </>
        )}

      </div>
      <div className="flex flex-wrap items-center container justify-center">
        {tableData.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          tableData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
              <Card
                className="bg-white shadow-lg cursor-pointer flex flex-col"
                onClick={() => handleKnowMore(item, item.subdomain)}
              >
                <Card.Img
                  variant="top"
                  src={
                    item.imgSrc ||
                    `/images/default-images/${item.subdomain}.jpg`
                  }
                  className="object-cover w-full flex-shrink-0 h-60"
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




export default ViewEngineeringProjectsThree;
