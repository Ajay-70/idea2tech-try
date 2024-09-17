import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

function AboutUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycby5AGHxKxllJgSXtUscaFlbh82aKFr7gajKWwDLyTDV3zCUNviWUOLSrGzQXg8KXifM/exec";

    // Convert formData to URL-encoded format
    const formBody = Object.keys(formData)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
      )
      .join("&");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // URL-encoded content type
        },
        body: formBody,
      });

      const result = await response.text(); // Adjust for text response

      if (result.trim() === "success") {
        toast.success("Data added to the sheet successfully");
        setFormData({
          fullName: "",
          emailAddress: "",
          message: "",
        }); // Clear the form after success
      } else {
        toast.error("Error: " + result);
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src="/images/aboutus-bg.jpeg"
            alt="Idea2Tech!"
          />
        </div>
        {/* Close Image Column */}

        {/* Text Column */}
        <div className="max-w-lg bg-gray-100 border border-2-[#FABF2C] md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:py-10 lg:my-20 lg:ml-20 xl:mt-24 xl:ml-12">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-3xl font-extrabold uppercase text-[#3C9AF5] lg:text-4xl">
              Idea2Tech!
            </h2>
            <p className="mt-4">
              At Idea2Tech, we are passionate about shaping the future by
              providing innovative and comprehensive education in the fields of
              robotics, engineering, artificial intelligence, game development,
              art & craft, and agronomy. Founded with a vision to inspire and
              empower the next generation of tech-savvy innovators, we are
              dedicated to creating hands-on learning experiences that spark
              curiosity and foster critical thinking.
            </p>
          </div>
          {/* Close Text Wrapper */}
        </div>
        {/* Close Text Column */}
      </div>
      <div className="mt-5 mb-5 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">Our Services</h1>
          <p className="px-4 leading-relaxed">
            <ul>
              <li className="p-2">
                Discover a world of educational possibilities with our tailored
                services for schools.
              </li>
              <li className="p-2">
                We specialize in installing cutting-edge labs for learning in
                Robotics, Artificial Intelligence, Game Building, Arts and
                Crafts, 3D Modeling and Printing, Agronomy, Engineering Basics,
                and more.
              </li>
              <li className="p-2">
                Enhance student engagement with our science fairs and workshops,
                fostering curiosity and innovation.
              </li>
              <li className="p-2">
                Explore our convenient online courses available directly on our
                website, extending our commitment to accessible and
                comprehensive education.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <section className="text-gray-800 body-font">
        <div className="flex justify-center mt-10 text-4xl font-bold">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2 flex">
              <div className="px-4 py-6 bg-gray-100 flex flex-col justify-between flex-grow h-full transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="Hands-on learning"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Hands-on learning
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2 flex">
              <div className="px-4 py-6 bg-gray-100 flex flex-col justify-between flex-grow h-full transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="Affordable excellence"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Affordable excellence
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2 flex">
              <div className="px-4 py-6 bg-gray-100 flex flex-col justify-between flex-grow h-full transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="Flexible"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Flexible
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2 flex">
              <div className="px-4 py-6 bg-gray-100 flex flex-col justify-between flex-grow h-full transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="Student-centric approach"
                  />
                </div>
                <h2 className="title-font font-regular m-0 text-2xl text-gray-900">
                  Student-centric approach
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center capitalize mt-10 text-4xl font-bold">
        Provide Your Feedback
      </div>
      <div className="bg-gray-100 max-w-xl my-5 mx-auto mt-16 flex w-full flex-col border rounded-lg p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Feedback
        </h2>
        <p className="mb-5 leading-relaxed text-gray-600">
          If you had any issues or you liked our product, please share with us!
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="fullName"
              className="text-sm leading-7 text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="emailAddress"
              className="text-sm leading-7 text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          <button
            className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
            type="submit"
          >
            Send
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </form>
      </div>
    </div>
  );
}

export default AboutUs;
