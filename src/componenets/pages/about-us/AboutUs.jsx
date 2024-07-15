import React from "react";
import Banners from "../../Banners/Banners";

function AboutUs() {
  function Submit(e) {
    e.preventDefault(); // Prevent default form submission
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbwEvepFhjk_m5tEMbkT6ibuukuGjprTd_9dZWI__07qQkTU7ZeWx0cD8jNktpy8il9R/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
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
            <h2 className="text-3xl font-extrabold uppercase  border-2 border-b-red-500 text-[#3C9AF5] lg:text-4xl">
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

      <div className="max-w-5xl  my-5 mx-auto mt-12 px-4 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">Our Services</h1>
          <p className="px-4 leading-relaxed">
            Discover a world of educational possibilities with our tailored
            services for schools. We specialize in installing cutting-edge labs
            that facilitate learning in Robotics, Artificial Intelligence, Game
            Building, Arts and Crafts, 3D Modeling and Printing, Agronomy,
            Engineering Basics, and more. Enhance student engagement with our
            science fairs and workshops, fostering curiosity and innovation.
            Additionally, explore our convenient online courses available
            directly on our website, extending our commitment to accessible and
            comprehensive education.
          </p>
        </div>
      </div>

      <section className="text-gray-800 body-font">
        <div className="flex justify-center mt-10 text-4xl font-bold">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="hands-on learning"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  hands-on learning
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
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

            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="flexible"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  flexible
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 hover:cursor-pointer sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                    alt="student-centric approach"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  student-centric approach
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-xl my-5 mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Feedback
        </h2>
        <p className="mb-5 leading-relaxed text-gray-600">
          If you had any issues or you liked our product, please share with us!
        </p>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="Message"
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
