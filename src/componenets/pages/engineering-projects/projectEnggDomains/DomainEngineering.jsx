import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CoursesData from "../../../data/Projects-Domains.json";

function DomainEngineering() {
  const { projectType } = useParams();
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleKnowMore = (title) => {
    const domainType = title.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with dashes
    navigate(`/engineering/${projectType}/domain/${domainType}`);
  };

  const sty = {
    width: "400px",
    padding: "25px",
    height: "600px",
  };
  const sty1 = {
    width: "400px",

    height: "500px",
  };

  return (
    <div className="main">
      <h2 className="text-3xl text-center font-bold mt-4">
        {projectType
          .replace("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
        Domains
      </h2>
      <div className="flex courses">
        {CoursesData.map((data, index) => (
          <div key={index} className="p-8">
            <Card style={sty}>
              <Card.Img variant="top" style={sty1} src={data.imageSrc} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.content}</Card.Text>
                <Button
                  onClick={() => handleKnowMore(data.domain)} // Pass a function reference
                  className="mt-4 px-4 border-collapse bg-[#3C9AF5] hover:bg-[#5d6dff]"
                >
                  Browse Projects Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DomainEngineering;
