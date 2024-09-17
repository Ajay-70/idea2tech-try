import React from "react";
import OurMission from "../../OurMission";
import BookAMeeting from "../../meeting-Forms/BookAMeeting";
import MainCarousel from "../../carousel/MainCarousel";
import { Link } from "react-router-dom";
import "./Educators";

const Educators = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[620px]" id="home">
        <div className="absolute inset-0 opacity-70 bg-gray-900"></div>
        <div className="relative flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 opacity-90 bg-[#D8A31D]">
            <h1 className="text-gray-900 font-bold text-4xl md:text-5xl leading-tight mb-2">
              Welcome Educators!
            </h1>
            <p className="font-bold  text-xl mb-8 mt-4">
              We believe in partnering with educators to empower the next
              generation of innovators.
            </p>
            <Link
              to="/get-in-touch"
              className="px-6 py-3 bg-[#3C9AF5] font-medium rounded-full hover:bg-[#5d6dff] text-white transition duration-200"
            >
              Contact Us
            </Link>
          </div>

          <div
            className="w-full md:w-1/2 h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/oureducators.jpg')" }}
          >
            {/* Optional: If you prefer to use an <img> tag */}
            {/* <img src="/images/oureducators.jpg" alt="Our Educators" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <OurMission />

      {/* Programs Offered Section */}
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Programs Offered
          </h2>
          <div className="border-b mb-5 flex justify-between text-sm"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programData.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Level-Based Teaching Curriculum */}
      <div className="mmax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 my-4 text-center">
          Our Level-Based Teaching Curriculum
        </h2>
        <div className="border-b  flex justify-between text-sm"></div>
        <section className="max-w-7xl mx-auto z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {levelData.map((level) => (
            <div
              key={level.id}
              className="rounded-md bg-neutral-900/10 p-8 text-center shadow cursor-pointer duration-500 hover:scale-110"
            >
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage: `linear-gradient(${level.gradient})`,
                  borderColor: level.borderColor,
                }}
              >
                <level.icon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="mt-6 font-semibold">{level.title}</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                {level.description}
              </p>
            </div>
          ))}
        </section>
      </div>

      {/* Lab Setup Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Lab Setup
            </h2>
            <div className="border-b  flex justify-between text-sm"></div>
            <p className="my-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We set up state-of-the-art labs in schools, equipped with the
              latest technology and materials. These labs provide a conducive
              environment for students to learn and explore practically.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Carousel Component */}

            <div
              id="default-carousel"
              className="relative rounded-lg overflow-hidden shadow-lg"
              data-carousel="static"
            >
              {/* Carousel wrapper */}
              <div
                className="relative CarouselImg md:h-120 overflow-hidden"
                data-carousel-inner
              >
                <MainCarousel
                  className="object-cover w-full h-full"
                  images={labImages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Additional Services
        </h2>
        <div className="flex space-x-5 justify-center items-center">
          <div className="max-w-screen-xl mx-auto p-1 sm:p-10 md:p-16">
            <div className="border-b mb-5 flex justify-between text-sm"></div>

            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="bg-white shadow-sm rounded-md overflow-hidden">
                  <img
                    className="w-full h-74 object-cover object-center"
                    src="/images/educa-workshop.jpeg"
                    alt="blog"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-2">Workshops</h3>
                    <p className="text-gray-600 lg:text-lg">
                      We conduct free workshops on various topics including
                      robotics, drones, agriculture technology, and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-2 ">
                <div className="bg-white shadow-sm rounded-md overflow-hidden">
                  <img
                    className="w-full h-74 object-cover object-center"
                    src="/images/educa-scienceFair.jpeg"
                    alt="blog"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-2">
                      Science Fair
                    </h3>
                    <p className="text-gray-600 lg:text-lg">
                      Our science fairs showcase the innovative projects built
                      by students, encouraging creativity and practical
                      application of knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Idea Creation Section */}
      <section>
        <div className=" mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col  justify-center">
          <div className="flex flex-col">
            <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl"></div>{" "}
            {/* Starts component */}
            <div className="mt-6 border-t pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                <div>
                  <span className="text-gray-800 border-b-2 lg:text-xl lg:font-bold uppercase text-xs font-medium">
                    Idea Creation
                  </span>
                  <p className="text-4xl lg:text-5xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    Idea Books
                  </p>
                  <p className="text-sm lg:text-xl mt-4 text-gray-700 text-balance">
                    Students receive idea books to note down their ideas and
                    discussion points during the program, fostering creativity
                    and critical thinking.
                  </p>
                </div>
                <div className="h-full md:order-first">
                  <img
                    src="/images/idea book.png"
                    alt="#_"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full  object-center"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse"></div>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* Program Duration and Structure Section */}
      <section className="relative block px-6 py-10 md:py-20 md:px-10">
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-gradient-to-b mb-4 from-black to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Program Duration and Structure
          </h2>
          <div className="border-b mb-5 flex justify-between text-sm"></div>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800">
            Our programs typically run for 4 months, with flexible timing to
            adapt to different school needs. We offer various levels to cater to
            different class groups.
          </p>
        </div>
      </section>

      {/* Book a Meeting Section */}
      <BookAMeeting />
    </div>
  );
};

// Example Data (Replace with your actual data)
const programData = [
  {
    id: 1,
    title: "Robotics",
    description:
      "The Robotics Fundamentals course introduces beginners to robotics, covering robot anatomy, sensors, actuators, and control systems.",
    image: "/images/robotics-full.jpeg",
    alt: "Robotics",
  },
  {
    id: 2,
    title: "Artificial Intelligence and Game Building",
    description:
      "The Artificial Intelligence and Game Building course introduces participants to AI technology and game development. Covering AI tools like machine learning and neural networks, and using block coding platforms, participants learn game design, programming logic, and problem-solving skills.",
    image: "/images/ai full.png",
    alt: "Artificial Intelligence and Game Building",
  },
  {
    id: 3,
    title: "Art and Crafts",
    description:
      "The Creative Arts Research course inspires young minds through hands-on activities, exploring various art forms like drawing, painting, and sculpture. It fosters artistic expression, skill development, and experimentation in a fun and supportive environment.",
    image: "/images/Art and crafting full.jpeg",
    alt: "Art and Crafts",
  },
  {
    id: 4,
    title: "3D Modeling and Printing",
    description:
      "The 3D modeling and printing course introduces participants to 3D design and fabrication, covering fundamentals, modeling techniques, and translating digital designs into physical objects. It explores industry applications and provides hands-on experience using Tinkercad for creating simple 3D models.",
    image: "/images/3D Modeling and Printing full.png",
    alt: "3D Modeling and Printing",
  },
  {
    id: 5,
    title: "Agronomy",
    description:
      "The Agronomy course immerses students in agricultural science and crop production, covering principles, practices, and technologies for sustainable cultivation. Combining classroom learning, hands-on fieldwork, and interactive activities, it offers a comprehensive understanding of modern agriculture concepts and processes.",
    image: "/images/Agronomy full.png",
    alt: "Agronomy",
  },
  {
    id: 6,
    title: "Engineering Basics",
    description:
      "Engineering Basics offers an immersive introduction to engineering principles, concepts, and applications. Designed for curious students, it provides hands-on learning in various engineering branches through interactive experiences, practical demonstrations, and collaborative projects, showcasing the field's diversity and dynamism.",
    image: "/images/engineering basics full.jpeg",
    alt: "Engineering Basics",
  },
  // Add more program entries as needed
];

const levelData = [
  {
    id: 1,
    title: "LEVEL 1",
    description:
      "Begin with fundamental principles and hands-on learning in our programs, fostering a strong foundational understanding.",
    gradient: "rgb(144, 238, 144) 0%, rgb(34, 139, 34) 100%",
    borderColor: "rgb(34, 139, 34)",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-certificate"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="15" cy="15" r="3"></circle>
        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
        <path d="M10 15h-7v-11a2 2 0 0 1 2 -2h11v7"></path>
        <line x1="6" y1="9" x2="9" y2="9"></line>
      </svg>
    ),
  },
  {
    id: 1,
    title: "LEVEL 2",
    description:
      "Progress with intermediate designs and automation, building practical skills and deeper knowledge in our programs.",
    gradient: "rgb(255, 223, 186) 0%, rgb(255, 165, 0) 100%",
    borderColor: "rgb(255, 140, 0)",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-star"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 17.25l-7.5 4.25l1.5 -8.5l-6 -6l8.5 -1l3.5 -8l3.5 8l8.5 1l-6 6l1.5 8.5z"></path>
      </svg>
    ),
  },
  {
    id: 1,
    title: "LEVEL 3",
    description:
      "Execute advanced projects, emphasizing innovation and complexity, applying comprehensive skills and knowledge gained from our previous levels",
    gradient: "rgb(255, 182, 193) 0%, rgb(255, 20, 147) 100%",
    borderColor: "rgb(219, 112, 147)",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-trophy"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
        <path d="M7 4h10v7a5 5 0 0 1 -10 0v-7"></path>
        <path d="M3 8v-2a1 1 0 0 1 1 -1h2.68a2 2 0 0 1 1.59 .75l.29 .29h7.88l.29 -.29a2 2 0 0 1 1.59 -.75h2.68a1 1 0 0 1 1 1v2"></path>
        <path d="M21 10v1a5 5 0 0 1 -5 5"></path>
        <path d="M3 10v1a5 5 0 0 0 5 5"></path>
      </svg>
    ),
  },

  // Add more level entries as needed
];

const labImages = [
  "/images/lab1.jpg",
  "/images/lab2.jpg",
  "/images/lab3.jpg",

  // Add more lab images as needed
];

export default Educators;
