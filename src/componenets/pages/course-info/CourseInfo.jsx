import React from "react";
import courseData from "../../data/Courses-info-data.json";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "./CourseInfo.css";

function CourseInfo() {
  const location = useLocation(); // Get the location object from react-router-dom
  const { title } = location.state; // Access the title from location.state

  const course = courseData.find((course) => course.course === title); // Find the course by title

  if (!course) {
    // If course is not found, display a message or redirect
    return <div>Course not found</div>;
  }

  return (
    <div className="flex h-screen bg-gray-400">
      {/* Sidebar */}

      <div className="hidden md:flex flex-col w-80 bg-gray-400">
        <div className="flex items-center justify-center h-16  bg-gray-200">
          <span className=" font-extrabold uppercase">
            Welcome to Arduino Course
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-4 py-4 bg-gray-200">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-font-semibold hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              Introduction
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2  hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h3 className="blur-sm px-2"> Babies</h3>
            </a>

            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2  hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h3 className="blur-sm px-2"> Babies</h3>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2  hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h3 className="blur-sm px-2"> Babies</h3>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2  hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h3 className="blur-sm px-2"> Babies</h3>
            </a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex justify-center bg-white h-screen">
          <div className="w-11/12 md:w-7/12 p-4 mt-0 rounded-lg shadow-md">
            <div
              className="relative overflow-hidden bg-white"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={course.videoUrl}
                title="Course video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex bg-white justify-between">
              <div>
                <h1 className="mt-4 text-2xl font-bold">
                  {course.courseTitle}
                </h1>
                <p className="mt-1 text-gray-600">{course.welcomeMessage}</p>
              </div>
              <a
                className="mt-8 inline-flex items-center capitalize rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                href={course.ctaButton.href}
              >
                {course.ctaButton.text}
              </a>
            </div>

            <div className="flex flex-col mt-3 max-w-xl">
              <label
                className="font-bold text-lg text-gray-900"
                htmlFor="comment"
              >
                {course.commentSection.label}
              </label>
              <textarea
                rows="4"
                className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-lg"
                id="comment"
                name="comment"
                placeholder={course.commentSection.placeholder}
              ></textarea>
              <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[100px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
