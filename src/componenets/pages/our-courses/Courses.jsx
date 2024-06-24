import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CoursesData from "../../data/courses.json";
import "./Courses.css";
import { useNavigate } from "react-router";

function Courses() {
  const sty = {
    width: "400px",
    padding: "25px",
    height: "600px",
  };
  const navigate = useNavigate();

  const handleKnowMore = (title) => {
    navigate(`/course/${encodeURIComponent(title)}`, {
      state: { title: title },
    });
    console.log(title);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="main">
      {/* <h1 className="m-8">Robotics</h1> */}
      <div className="flex courses">
        {CoursesData.map((data, index) => (
          <div key={index} className="p-10">
            <Card style={sty}>
              <Card.Img variant="top" src={data.imageSrc} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.content}</Card.Text>
                <Button
                  onClick={() => handleKnowMore(data.title)} // Pass a function reference
                  className="my-4 px-4 border-collapse bg-[#3C9AF5] hover:bg-[#7fb9f3]"
                >
                  Know more
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
