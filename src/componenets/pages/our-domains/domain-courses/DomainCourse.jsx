// import React from "react";
// import { useLocation } from "react-router";
// import "./DomainCourse.css";
// function DomainCourse() {
//   const location = useLocation();

//   console.log(location.state.title);

//   return (
//     <div>
//       {/* <h3>Project Description:</h3> */}

//       <section className="dark:bg-white dark:text-gray-800">
//         <div className="container max-w-6xl p-6 text-lg mx-auto space-y-6 sm:space-y-12">
//           <h1 className=" text-5xl text-center border-b-4 ">Robotics</h1>
//           <img
//             src="images/robotics-1.jpg"
//             alt=""
//             className="object-cover w-full h-80 rounded-lg sm:h-96 lg:col-span-7 dark:bg-gray-500"
//           />

//           <p className="text-xl m-8">
//             In the thrilling domain of robotics, creativity merges seamlessly
//             with technology, breathing life into machines. This project acts as
//             a catalyst, igniting your passion for robotics through the
//             exploration of foundational projects employing Arduino and NodeMCU
//             microcontrollers. These versatile platforms serve as gateways to a
//             realm of boundless exploration, experimentation, and innovation,
//             allowing you to craft robots that interact with their environment
//             using an array of sensors. Arduino and NodeMCU stand as stalwarts of
//             open-source hardware, offering intuitive avenues for prototyping and
//             project realization, bolstered by extensive libraries and robust
//             community support. Throughout this project, you'll integrate sensors
//             such as ultrasonic, infrared, and motion sensors, empowering your
//             robots to navigate their surroundings autonomously, from rudimentary
//             obstacle avoidance mechanisms to sophisticated line-following
//             algorithms.
//           </p>
//           <a
//             rel="noopener noreferrer"
//             className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
//           >
//             <img
//               src="images/robo-2.jpg"
//               alt=""
//               className="object-cover w-full h-80 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
//             />
//             <div className="p-6 text-xl space-y-2 lg:col-span-5">
//               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                 Outcomes:
//               </h3>

//               <ul className="list-disc">
//                 <li>
//                   Attainment of a profound understanding of robotics principles
//                   and embedded systems.
//                 </li>
//                 <li>
//                   Acquisition of the capability to design and deploy autonomous
//                   robots with sensing, reacting, and adapting abilities.
//                 </li>
//                 <li>
//                   Cultivation of invaluable problem-solving skills and technical
//                   proficiency.
//                 </li>
//                 <li>
//                   Development of an unwavering appreciation for the vast
//                   potential of robotics technology and a significant boost in
//                   confidence to tackle complex challenges.
//                 </li>
//               </ul>
//             </div>
//           </a>
//           <a
//             rel="noopener noreferrer"
//             className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
//           >
//             <div className="p-6 space-y-2 lg:col-span-5">
//               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                 Skills you Gain:
//               </h3>

//               <ul className="list-disc">
//                 <li>
//                   Mastery of microcontroller programming using Arduino IDE and
//                   NodeMCU firmware, honing your ability to craft code that
//                   seamlessly interfaces with sensors and actuators.
//                 </li>
//                 <li>
//                   Delving into control algorithm design, sculpting behaviors
//                   that govern the actions of your robotic creations, through
//                   immersive engagement with this project.
//                 </li>
//                 <li>
//                   Refinement of proficiency in electronics prototyping, circuit
//                   design, and soldering, elevating your capabilities as a
//                   versatile roboticist.
//                 </li>
//                 <li>
//                   Acquisition of a diverse skill set essential for success in
//                   the realm of robotics and embedded systems, through hands-on
//                   exploration and experimentation.
//                 </li>
//               </ul>
//             </div>
//             <img
//               src="images/robo-3.jpg"
//               alt=""
//               className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
//             />
//           </a>
//           <p>
//             <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//               Overall Insights:
//             </h3>
//             To enrich your understanding of robotics and broaden your skill set,
//             a plethora of resources and avenues for further exploration await.
//             Dive into online tutorials, forums, and documentation to deepen your
//             insights into specific sensors, components, and technologies. Engage
//             with robotics clubs, workshops, and competitions to forge
//             connections with kindred spirits and gain hands-on experience in the
//             field of robotics. As you traverse the realm of robotics, maintain
//             an insatiable curiosity, a relentless pursuit of discovery, and an
//             unwavering commitment to lifelong learning. With determination,
//             passion, and an eagerness to embrace challenges, the possibilities
//             within the realm of robotics are limitless. So, roll up your
//             sleeves, power up your microcontroller, and embark on an
//             exhilarating odyssey in robotics that promises to leave an indelible
//             mark on the world!
//           </p>
//           <div className="flex justify-center">
//             <button
//               type="button"
//               className="px-6 py-3 text-xl bold rounded-md hover:underline  dark:bg-stone-800 dark:text-gray-400"
//             >
//               Online Courses Coming Soon...
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default DomainCourse;

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
      <section className="dark:bg-white dark:text-gray-800">
        <div className="container max-w-6xl p-6 text-lg mx-auto space-y-6 sm:space-y-12">
          <h1 className=" text-5xl text-center border-b-4 ">
            {courseData.title}
          </h1>
          <img
            src={courseData.image}
            alt=""
            className=" w-full h-[60rem rounded-lg sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />

          <p className="text-xl m-8 center-tb">{courseData.description}</p>
          <a
            rel="noopener noreferrer"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={courseData.outcomesImage}
              alt=""
              className="object-contain w-full h-[40rem] lg:px-4 sm:h-[50rem] lg:col-span-7 dark:bg-gray-500 flex items-center justify-center"
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
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
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
              className="object-contain w-full h-[40rem] lg:px-4 sm:h-[50rem] lg:col-span-7 dark:bg-gray-500 flex items-center justify-center"
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
              className="px-6 py-3 text-xl bold rounded-md hover:underline  dark:bg-stone-800 dark:text-gray-400"
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
