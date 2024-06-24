import React from "react";
import BookAnAppintment from "../../forms/BookAnAppintment";

import OurMission from "../../OurMission";
import BookAMeeting from "../../meeting-Forms/BookAMeeting";
function Educators() {
  return (
    <div>
      <div className="relative w-full h-[620px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/images/oureducators1.png"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row text-center items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-gray-900 font-bold text-4xl md:text-5xl leading-tight mb-2">
              Welcome Educators!
            </h1>
            <p className="font-bold text-gray-700 text-xl mb-8 mt-4">
              we believe in partnering with educators to empower the next
              generation of innovators.
            </p>
            <a
              href="#contactUs"
              className="px-6 py-3 bg-[#3C9AF5]  font-medium rounded-full hover:bg-[#5d6dff] text-white  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <OurMission />

      <section class="py-10" id="services">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Programs Offered
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/robotics-full.jpeg"
                alt="wheat flour grinding"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">Robotics</h3>
                <p class="text-gray-700 text-base">
                  Our wheat flour grinding service provides fresh, high-quality
                  flour to businesses and individuals in the area. We use
                  state-of-the-art equipment to grind wheat into flour, and we
                  offer a variety of flours to meet the needs of our customers.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/ai full.png"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Artificial Intelligence and Game Building
                </h3>
                <p class="text-gray-700 text-base">
                  Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source
                  of protein and fiber.Our gram flour grinding service is a
                  convenient and affordable way to get the freshest gram flour
                  possible.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/Art and crafting full.jpeg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Art and Crafts
                </h3>
                <p class="text-gray-700 text-base">
                  Our jowar grinding service is a convenient and affordable way
                  to get fresh, high-quality jowar flour. We use
                  state-of-the-art equipment to grind jowar into a fine powder,
                  which is perfect for making roti, bread, and other dishes.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      Our jowar flour is also a good source of protein and
                      fiber, making it a healthy choice for your family.
                    </p>
                  </details>
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/3D Modeling and Printing full.png"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  3D Modeling and Printing
                </h3>
                <p class="text-gray-700 text-base">
                  We specializes in the production of high-quality chili powder.
                  Our chili powder is made from the finest, freshest chilies,
                  and we use traditional pounding methods to ensure that our
                  chili powder retains its full flavor and aroma.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      {" "}
                      We offer a variety of chili powder products, including
                      mild, medium, and hot. We also offer custom blends to meet
                      the specific needs of our customers.
                    </p>
                  </details>
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg p-0.5 shadow-md overflow-hidden min-h-full">
              <img
                src="/images/Agronomy full.png"
                alt="Coffee"
                class="w-full h-64 object-cover rounded-t-lg"
              />
              <div class="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                <h3 class="text-xl font-medium text-gray-800 mb-2">Agronomy</h3>
                <p class="text-gray-700 text-base">
                  <span class="font-medium underline">Our speciality is</span>
                  Bappa Flour Mill offers a variety of flavored spaghetti dishes
                  that are sure to tantalize your taste buds. We use only the
                  freshest ingredients Our flavors include: Mango, spinach
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/images/engineering basics full.jpeg"
                alt="papad"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Rice Papad
                </h3>
                <p class="text-gray-700 text-base">
                  Our company produces high-quality rice papad that is made with
                  the finest ingredients. We use traditional methods to make our
                  papad, which gives it a unique flavor and texture. Our papad
                  is also gluten-free and vegan.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      {" "}
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to choose from. Our papad is available in
                      bulk or in individual packages.
                    </p>
                  </details>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Level-Based Teaching Curriculum
      </h2>
      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-md  bg-neutral-900/10 p-8 text-center shadow">
          <div
            className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
            style={{
              backgroundImage:
                "linear-gradient(rgb(144, 238, 144) 0%, rgb(34, 139, 34) 100%)",
              borderColor: "rgb(34, 139, 34)",
            }}
          >
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
          </div>

          <h3 className="mt-6 font-semibold">LEVEL 1</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
            Tailor your landing page's look and feel, from the color scheme to
            the font size, to the design of the page.
          </p>
        </div>

        <div className="rounded-md  bg-neutral-900/10 p-8 text-center shadow">
          <div
            className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
            style={{
              backgroundImage:
                "linear-gradient(rgb(255, 223, 186) 0%, rgb(255, 165, 0) 100%)",
              borderColor: "rgb(255, 140, 0)",
            }}
          >
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
          </div>

          <h3 className="mt-6 font-semibold">LEVEL 2</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
            We build our templates for speed in mind, for super-fast load times
            so your customers never waver.
          </p>
        </div>

        <div className="rounded-md border border-neutral-800 bg-neutral-900/10 p-8 text-center shadow">
          <div
            className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
            style={{
              backgroundImage:
                "linear-gradient(rgb(255, 182, 193) 0%, rgb(255, 20, 147) 100%)",
              borderColor: "rgb(219, 112, 147)",
            }}
          >
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
          </div>

          <h3 className="mt-6 font-semibold">LEVEL 3</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
            Everything you need to succeed and launch your landing page, right
            out of the box. No need to install anything else.
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
              Lab Setup
            </h2>

            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We set up state-of-the-art labs in schools, equipped with the
              latest technology and materials. These labs provide a conducive
              environment for students to learn and explore practically.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Carousel component */}
            <div
              id="default-carousel"
              className="relative rounded-lg overflow-hidden shadow-lg"
              data-carousel="static"
            >
              {/* Carousel wrapper */}
              <div
                className="relative h-96 md:h-120 overflow-hidden"
                data-carousel-inner
              >
                {/* Item 1 */}
                <div className="duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIG1.8sg665zyQUCles19hEy.&pid=ImgGn"
                    className="object-cover w-full h-full"
                    alt="Slide 1"
                  />
                </div>
                {/* Item 2 */}
                <div
                  className="duration-700 ease-in-out hidden"
                  data-carousel-item
                >
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIG1.hAvYlYltUzgIYYivZ006&pid=ImgGn"
                    className="object-cover w-full h-full"
                    alt="Slide 2"
                  />
                </div>
                {/* Item 3 */}
                <div
                  className="duration-700 ease-in-out hidden"
                  data-carousel-item
                >
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIG1.xC76pfJJVKTkiomjX5Ar&pid=ImgGn"
                    className="object-cover w-full h-full"
                    alt="Slide 3"
                  />
                </div>
              </div>
              {/* Slider indicators */}
              <div
                className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
                data-carousel-indicators
              >
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                data-carousel-prev
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                data-carousel-next
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Additional Services
        </p>
        <div className=" flex space-x-5 justify-center items-center">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm"></div>

        <div className="flex flex-wrap -mx-4">
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

          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-white shadow-sm rounded-md overflow-hidden">
              <img
                className="w-full h-74 object-cover object-center"
                src="/images/educa-scienceFair.jpeg"
                alt="blog"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">Science Fair</h3>
                <p className="text-gray-600 lg:text-lg">
                  Our science fairs showcase the innovative projects built by
                  students, encouraging creativity and practical application of
                  knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white shadow-sm rounded-md overflow-hidden">
              <img
                className="w-full h-48 object-cover object-center"
                src="https://via.placeholder.com/500x300"
                alt="blog"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Post Title</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero.
                </p>
                <a href="#" className="block text-indigo-600 mt-3">
                  Read more
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <section>
        <div className="px-8 py-4 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col  justify-center">
          <div className="flex flex-col">
            <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl"></div>{" "}
            {/* Starts component */}
            <div className="mt-6 border-t pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                <div>
                  <span className="text-gray-600 uppercase text-xs font-medium">
                    Idea Creation
                  </span>
                  <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    Idea Books
                  </p>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
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
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  "
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-gradient-to-b from-black to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Program Duration and Structure
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800">
            Our programs typically run for 4 months, with flexible timing to
            adapt to different school needs. We offer various levels to cater to
            different class groups.
          </p>
        </div>
      </section>

      <BookAMeeting />
    </div>
  );
}

export default Educators;
