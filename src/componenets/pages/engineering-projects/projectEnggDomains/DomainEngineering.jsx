import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CoursesData from "../../../data/Projects-Domains.json";

function DomainEngineering() {
  const { projectType } = useParams();
  const navigate = useNavigate();

  const handleKnowMore = (title) => {
    const domainType = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/engineering/${projectType}/${domainType}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const sty = {
    width: "350px",
    height: "400px",
  };
  const sty1 = {
    width: "400px",
    height: "250px",
  };

  // Filter CoursesData based on the projectType
  const filteredCourses = CoursesData.filter(
    (data) => data.projectType === projectType.toLowerCase()
  );

  return (
    <div className="main">
      <h2 className="text-3xl text-center font-bold mt-4">
        {projectType
          .replace("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
        Domains
      </h2>
      <div className="flex courses">
        {filteredCourses.map((data, index) => (
          <div key={index} className="p-8">
            <Card style={sty}>
              <Card.Img variant="top" style={sty1} src={data.imageSrc} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.content}</Card.Text>
                <Button
                  onClick={() => handleKnowMore(data.domain)}
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
