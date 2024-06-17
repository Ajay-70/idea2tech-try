import React from "react";
import Banners from "../../Banners/Banners";
import OurMission from "../../OurMission";

function AboutUs() {
  return (
    <div>
      <div class="flex h-screen justify-center items-center max-w-screen-xl mx-auto">
        <div class="sm:w-1/2 p-10">
          <div class="max-w-2xl mx-auto">
            <div
              id="default-carousel"
              class="relative rounded-lg overflow-hidden shadow-lg"
              data-carousel="static"
            >
              {/* <!-- Carousel wrapper --> */}
              <div class="relative h-150 md:h-96" data-carousel-inner>
                {/* <!-- Item 1 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    class="object-cover w-full h-full"
                    alt="Slide 1"
                  />
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
                    First Slide
                  </span>
                </div>
                {/* <!-- Item 2 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    class="object-cover w-full h-full"
                    alt="Slide 2"
                  />
                </div>
                {/* <!-- Item 3 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    class="object-cover w-full h-full"
                    alt="Slide 3"
                  />
                </div>
              </div>
              {/* <!-- Slider indicators --> */}
              <div
                class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
                data-carousel-indicators
              >
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
                ></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button
                type="button"
                class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                data-carousel-prev
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                data-carousel-next
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 bold  border-b-2 border-indigo-600 uppercase">
              Welcome !
            </span>
            <h2 class="my-4 font-bold text-3xl sm:text-4xl">
              <span class="text-indigo-600">At Idea2Tech</span>
            </h2>
            <p class="text-gray-700">
              we are passionate about shaping the future by providing innovative
              and comprehensive education in the fields of robotics,
              engineering, artificial intelligence, game development, art &
              craft, and agronomy. Founded with a vision to inspire and empower
              the next generation of tech-savvy innovators, we are dedicated to
              creating hands-on learning experiences that spark curiosity and
              foster critical thinking.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 container text-center my-5 p-8">
        {/* <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          good words
        </h2> */}

        <div className="flex flex-wrap items-center mt-20  text-left ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <div class="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 r md:text-left lg:pl-12">
            <div class="order-first md:order-last">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Our mission is to bridge the gap between traditional education
                and the technological advancements of the modern world. We aim
                to cultivate a learning environment that encourages creativity,
                innovation, and practical problem-solving skills in students
                from a young age. By integrating cutting-edge technology and
                interactive projects into our curriculum, we prepare students
                for the challenges and opportunities of the future.
              </p>
              <div class="mt-8"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 container text-center my-5 p-8">
        <div className="flex flex-wrap items-center mt-20 text-right ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              class="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first  md:text-left lg:pr-12">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p class="mt-4 text-gray-600 text-lg">
              Our mission is to bridge the gap between traditional education and
              the technological advancements of the modern world. We aim to
              cultivate a learning environment that encourages creativity,
              innovation, and practical problem-solving skills in students from
              a young age. By integrating cutting-edge technology and
              interactive projects into our curriculum, we prepare students for
              the challenges and opportunities of the future.
            </p>
          </div>
        </div>
      </div>

      <OurMission />
      <div class="relative bg-violet-600">
        <div class="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            class="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Subscribe to our newsletter
            </h2>
            <p class="mb-6 text-base text-indigo-200 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
            <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required=""
                type="text"
                class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </a>
            </form>
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
