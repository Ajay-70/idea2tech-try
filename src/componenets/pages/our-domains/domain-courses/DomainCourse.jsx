import React from "react";
import { useLocation } from "react-router";
import domainCoursesData from "../../../data/try-courses.json";
import "./DomainCourse.css";

function DomainCourse() {
  const location = useLocation();
  console.log(location.state.title);

  // Find the course data based on the title
  const courseData = domainCoursesData.find(
    (course) => course.title === location.state.title
  );

  // If course data is not found, display a message
  if (!courseData) {
    return <div>No data found for the selected course.</div>;
  }

  return (
    <div>
      <section className=" ">
        <div className="container max-w-6xl p-6 text-lg mx-auto space-y-6 sm:space-y-12">
          <h1 className=" text-5xl text-center border-b-4 ">
            {courseData.title}
          </h1>
          <img
            src={courseData.image}
            alt=""
            className="onlyimage w-full  h-[60rem rounded-lg sm:h-96 lg:col-span-7 "
          />

          <p className="text-xl m-8 center-tb">{courseData.description}</p>
          <a
            rel="noopener noreferrer"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
          >
            <img
              src={courseData.outcomesImage}
              alt=""
              className="object-contain w-full h-[40rem] lg:px-4 sm:h-[50rem] lg:col-span-7  flex items-center justify-center"
            />

            <div className="p-6 text-xl space-y-2 lg:col-span-5">
              <h3 className="text-2xl lg:px-4 align-middle font-semibold group-hover:underline group-focus:underline">
                Outcomes:
              </h3>

              <ul className="list-disc">
                {courseData.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
          >
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Skills you Gain:
              </h3>

              <ul className="list-disc">
                {courseData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <img
              src={courseData.skillsImage}
              alt=""
              className="object-contain w-full h-[40rem] lg:px-4 sm:h-[50rem] lg:col-span-7  flex items-center justify-center"
            />
          </a>
          <p>
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Overall Insights:
            </h3>
            {courseData.overall_insights}
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-xl bold rounded-md hover:underline "
            >
              Online Courses Coming Soon...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DomainCourse;
