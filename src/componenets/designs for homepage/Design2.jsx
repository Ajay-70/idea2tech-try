import React from "react";
import "./Design2.css";
function Design2() {
  const events = [
    {
      id: 1,
      title: "Robotics",
      levels: [
        "Level 1: Introduction to Robotics",
        "Level 2: Intermediate Robotics",
        "Level 3: Advanced Robotics with Arduino IDE",
      ],
    },
    {
      id: 2,
      title: "Engineering Basics",
      levels: [
        "Level 1: Basics of Engineering",
        "Level 2: Intermediate Engineering Concepts",
        "Level 3: Advanced Engineering Projects",
      ],
    },
    {
      id: 3,
      title: "Artificial Intelligence & Game Development",
      levels: [
        "Level 1: Intro to AI & Game Development",
        "Level 2: Intermediate AI & Game Design",
        "Level 3: Advanced AI with MIT App Inventor & Alexa",
      ],
    },
    {
      id: 4,
      title: "Art & Craft",
      levels: [
        "Level 1: Creative Art & Craft",
        "Level 2: Advanced Art Techniques",
        "Level 3: Professional Art Projects",
      ],
    },
    {
      id: 5,
      title: "Agronomy",
      levels: [
        "Level 1: Basics of Agronomy",
        "Level 2: Intermediate Agronomy and Grafting",
        "Level 3: Advanced Agronomy & Hydroponics",
      ],
    },
    {
      id: 6,
      title: "3D Modeling and Printing",
      levels: [
        "Level 1: Basics of 3D Modeling and Printing",
        "Level 2: Intermediate Designing 3D Modeling",
        "Level 3: Advanced Printing 3D Models",
      ],
    },
  ];

  // const colors = ["#FFD02C", "#4F3BC1", "#FF752B", "#2AAF50", "#3C9AF5"];
  const colors = ["#dfae00", "#4F3BC1", "#FF752B", "#2AAF50", "#3C9AF5"];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative wrap overflow-hidden">
        <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2 timeline-border"></div>
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0
                ? "right-timeline"
                : "flex-row-reverse left-timeline"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div
              className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <h1 className="mx-auto font-semibold text-lg text-white">
                {event.id}
              </h1>
            </div>
            {/* Media query for screens up to 414px */}
            <div
              className="order-1 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 mt-4 sm:mt-0"
              style={{
                backgroundColor: colors[index % colors.length],
                border: "2px solid transparent", // Hide border on small screens
              }}
            >
              <h3 className="mb-3 font-bold text-white lg:text-3xl md:text-2xl">
                {event.title}
              </h3>
              <ul className="list-disc pl-5 ">
                {event.levels.map((level, levelIndex) => (
                  <li
                    key={levelIndex}
                    className="text-white lg:text-xl leading-tight"
                  >
                    <span className="font-bold">{level.split(": ")[0]}:</span>{" "}
                    {level.split(": ")[1]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design2;
