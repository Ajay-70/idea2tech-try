import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="flex  px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              Welcome to Idea2Tech!
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              At Idea2Tech, we are passionate about igniting young minds with
              the wonders of innovation and creativity. Our mission is to
              empower the next generation of thinkers, creators, and
              problem-solvers through hands-on, experiential learning in
              cutting-edge technologies and creative disciplines.
            </h3>
            <div className="mt-10 flex  flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 justify-center flex px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
                Get started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/abtus.jpeg"
              alt=""
              className="max-w-xs md:max-w-lg m-auto"
            />
          </div>
        </div>
      </div>
      {/* try 1 */}
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
      <div className="bg-gray-100 container text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          good words
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left ">
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
      {/* section 1 */}
      <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">Our Mission!</h1>
          <p className="px-4 leading-relaxed">
            "Cultivating a future where every child is a fearless innovator. At
            Idea2Tech, our vision is to ignite a passion for robotics and
            technology, inspiring a generation of visionary leaders to shape a
            brighter tomorrow."
          </p>
          <p className="mb-8 mt-4 px-4 leading-relaxed">
            Oh, and the best bit...
            <span className="text-pink-600 font-bold">It's wonderfull!</span>
          </p>
          <div>
            <a
              className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold"
              href="/signup"
            >
              Book a Meeting Now
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              We know tech, we know finance. We are fintech experts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              We know how to handle taxation for all the countries we operate
              in. We care for our customers and help them manage cash flows.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/503163/api-settings.svg"
                      alt="API Settings"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Powerful API
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/503163/api-settings.svg"
                      alt="API Settings"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Powerful API
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div>
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10  "
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full bg-gradient-to-b from-black to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Driving Progress
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800">
              "Transforming young minds through robotics and technology,
              Idea2Tech ignites a passion for innovation, equipping students
              with the skills to thrive in an ever-changing technological
              landscape. Together, let's shape a future where creativity knows
              no bounds, and every child's potential becomes a powerful force
              for progress."
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full bg-gradient-to-b from-black to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Our Services
            </h2>
          </div>
          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md  bg-neutral-900/10 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-color-swatch"
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
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 font-semibold">Labs and Workshops</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                Equip your institution with state-of-the-art robotics,
                engineering, and technology labs. Engage students in hands-on
                learning experiences through our tailored workshops and training
                sessions.
              </p>
            </div>

            <div className="rounded-md  bg-neutral-900/10 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bolt"
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
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
              </div>
              <h3 className="mt-6 font-semibold">
                Science Fairs and Competitions
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                Elevate student engagement and motivation through participation
                in our science fairs and competitions. Provide opportunities for
                students to showcase their creativity and problem-solving skills
                on a larger platform.
              </p>
            </div>

            <div className="rounded-md border border-neutral-800 bg-neutral-900/10 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-tools"
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
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                  <polyline points="12 8 7 3 3 7 8 12"></polyline>
                  <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                  <polyline points="16 12 21 17 17 21 12 16"></polyline>
                  <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                </svg>
              </div>
              <h3 className="mt-6 font-semibold">Curriculum Integration</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900">
                Seamlessly integrate our courses into your existing curriculum.
                Enhance learning outcomes with our interdisciplinary approach to
                robotics, arts, engineering, and more.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="-mx-4 flex flex-wrap p-8">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <svg
                width="53"
                height="61"
                viewBox="0 0 53 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20.8433"
                  y="19.3018"
                  width="10.1675"
                  height="12.201"
                  fill="#ABA8F7"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.1119 5.91343C40.9499 4.62242 39.4875 3.95192 38.2383 4.04801C36.1465 4.20891 33.9414 5.92602 31.8695 8.63549C30.0459 11.0202 28.5417 13.8917 27.5307 16.2458C33.6951 16.5488 37.7115 15.7786 40.1926 14.5916C42.7088 13.3878 43.5948 11.7969 43.7449 10.3715C43.9049 8.85254 43.2637 7.19309 42.1119 5.91343ZM8.75274 16.6855C6.24093 15.1295 4.93328 12.9984 4.69026 10.691C4.42078 8.13252 5.49249 5.64717 7.08955 3.87282C8.6764 2.10982 10.9989 0.817106 13.4643 1.00675C16.9349 1.27372 19.8489 3.94064 22.0221 6.78264C23.4868 8.69803 24.7428 10.8606 25.7343 12.8643C26.7259 10.8606 27.9818 8.69803 29.4465 6.78264C31.6197 3.94064 34.5337 1.27372 38.0043 1.00675C40.4697 0.817106 42.7922 2.10982 44.3791 3.87282C45.9761 5.64717 47.0478 8.13252 46.7784 10.691C46.5353 12.9984 45.2277 15.1295 42.7159 16.6855H49.8822C51.286 16.6855 52.4241 17.8236 52.4241 19.2274V31.1348C52.4241 32.5386 51.286 33.6766 49.8822 33.6766H49.3122V58.6608C49.3122 59.9464 48.1845 60.9886 46.7933 60.9886H31.5363L31.5191 60.9887L31.502 60.9886H20.3521L20.3349 60.9887L20.3178 60.9886H5.0608C3.66963 60.9886 2.54187 59.9464 2.54187 58.6608L2.54187 33.6766C1.13804 33.6766 0 32.5386 0 31.1348V19.2274C0 17.8236 1.13803 16.6855 2.54187 16.6855H8.75274ZM33.0443 58.1952H46.2895V33.6766H33.0443V58.1952ZM33.0443 30.6264H49.3738V19.7358H33.0443V30.6264ZM29.4465 16.6855C26.9347 15.1295 25.627 12.9984 25.384 10.691C25.1145 8.13252 26.1862 5.64717 27.7833 3.87282C29.3701 2.10982 31.6926 0.817106 34.158 1.00675C37.6286 1.27372 40.5426 3.94064 42.7159 6.78264C44.1806 8.69803 45.4366 10.8606 46.4281 12.8643C47.4197 10.8606 48.6756 8.69803 50.1403 6.78264C52.3135 3.94064 55.2275 1.27372 58.6981 1.00675C61.1635 0.817106 63.4861 2.10982 65.073 3.87282C66.67 5.64717 67.7417 8.13252 67.4723 10.691C67.2293 12.9984 65.9216 15.1295 63.4098 16.6855H70.5761C71.9799 16.6855 73.118 17.8236 73.118 19.2274V58.6608C73.118 59.9464 71.9902 60.9886 70.599 60.9886H55.342L55.3248 60.9887L55.3077 60.9886H44.1578L44.1406 60.9887L44.1235 60.9886H28.8665L28.8493 60.9887L28.8322 60.9886H13.5752C12.184 60.9886 11.0562 59.9464 11.0562 58.6608L11.0562 19.2274C11.0562 17.8236 12.184 16.6855 13.5878 16.6855H29.4465ZM48.1531 33.6766H35.5343V58.6608H48.1531V33.6766ZM48.1531 30.6264V19.7358H35.5343V30.6264H48.1531Z"
                  fill="#ABA8F7"
                ></path>
              </svg>
            </div>
            <h3 className="mb-1 text-xl font-semibold">Expertise</h3>
            <p className="text-gray-600">
              <ul className="list-disc">
                <li>
                  Benefit from our team of experienced educators and industry
                  professionals.
                </li>
                <li>
                  Inspire a generation of fearless innovators who will shape the
                  future.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <svg
                width="53"
                height="61"
                viewBox="0 0 53 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3405 22.3586C26.7153 22.3338 26.9616 22.0185 26.9147 21.6479L25.8938 12.1627C25.8787 12.0155 25.7719 11.8984 25.6276 11.8973L20.7737 11.8879C20.6081 11.8866 20.4877 12.0114 20.4964 12.1774L21.0841 21.6457C21.1044 21.9743 20.8681 22.2543 20.5595 22.2582L10.6014 22.3151C10.272 22.3193 10 22.5968 10 22.9362L10.013 27.8784C10.013 28.2304 10.2813 28.5119 10.6156 28.5119L42.5844 28.5106C42.9153 28.5106 43.1913 28.2389 43.1913 27.9079L43.2053 22.9362C43.2053 22.5968 42.9333 22.3193 42.6039 22.3151L26.3405 22.3586Z"
                  fill="#ABA8F7"
                />
                <circle cx="32.5006" cy="38.5" r="6.5" fill="#ABA8F7" />
              </svg>
            </div>
            <h3 className="mb-1 text-xl font-semibold">Innovation</h3>
            <p className="text-gray-600">
              Stay ahead with access to cutting-edge technologies and
              curriculum.
            </p>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <svg
                width="53"
                height="61"
                viewBox="0 0 53 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20.8433"
                  y="19.3018"
                  width="10.1675"
                  height="12.201"
                  fill="#ABA8F7"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.1119 5.91343C40.9499 4.62242 39.4875 3.95192 38.2383 4.04801C36.1465 4.20891 33.9414 5.92602 31.8695 8.63549C30.0459 11.0202 28.5417 13.8917 27.5307 16.2458C33.6951 16.5488 37.7115 15.7786 40.1926 14.5916C42.7088 13.3878 43.5948 11.7969 43.7449 10.3715C43.9049 8.85254 43.2637 7.19309 42.1119 5.91343ZM8.75274 16.6855C6.24093 15.1295 4.93328 12.9984 4.69026 10.691C4.42078 8.13252 5.49249 5.64717 7.08955 3.87282C8.6764 2.10982 10.9989 0.817106 13.4643 1.00675C16.9349 1.27372 19.8489 3.94064 22.0221 6.78264C23.4868 8.69803 24.7428 10.8606 25.7343 12.8643C26.7259 10.8606 27.9818 8.69803 29.4465 6.78264C31.6197 3.94064 34.5337 1.27372 38.0043 1.00675C40.4697 0.817106 42.7922 2.10982 44.3791 3.87282C45.9761 5.64717 47.0478 8.13252 46.7784 10.691C46.5353 12.9984 45.2277 15.1295 42.7159 16.6855H49.8822C51.286 16.6855 52.4241 17.8236 52.4241 19.2274V31.1348C52.4241 32.5386 51.286 33.6766 49.8822 33.6766H49.3122V58.6608C49.3122 59.9464 48.1845 60.9886 46.7933 60.9886H31.5363L31.5191 60.9887L31.502 60.9886H20.3521L20.3349 60.9887L20.3178 60.9886H5.0608C3.66963 60.9886 2.54187 59.9464 2.54187 58.6608L2.54187 33.6766C1.13804 33.6766 0 32.5386 0 31.1348V19.2274C0 17.8236 1.13803 16.6855 2.54187 16.6855H8.75274ZM33.0443 58.1952H46.2895V33.6766H33.0443V58.1952ZM33.0443 30.6264H49.3738V19.7358H33.0443V30.6264ZM29.4465 16.6855C26.9347 15.1295 25.627 12.9984 25.384 10.691C25.1145 8.13252 26.1862 5.64717 27.7833 3.87282C29.3701 2.10982 31.6926 0.817106 34.158 1.00675C37.6286 1.27372 40.5426 3.94064 42.7159 6.78264C44.1806 8.69803 45.4366 10.8606 46.4281 12.8643C47.4197 10.8606 48.6756 8.69803 50.1403 6.78264C52.3135 3.94064 55.2275 1.27372 58.6981 1.00675C61.1635 0.817106 63.4861 2.10982 65.073 3.87282C66.67 5.64717 67.7417 8.13252 67.4723 10.691C67.2293 12.9984 65.9216 15.1295 63.4098 16.6855H70.5761C71.9799 16.6855 73.118 17.8236 73.118 19.2274V58.6608C73.118 59.9464 71.9902 60.9886 70.599 60.9886H55.342L55.3248 60.9887L55.3077 60.9886H44.1578L44.1406 60.9887L44.1235 60.9886H28.8665L28.8493 60.9887L28.8322 60.9886H13.5752C12.184 60.9886 11.0562 59.9464 11.0562 58.6608L11.0562 19.2274C11.0562 17.8236 12.184 16.6855 13.5878 16.6855H29.4465ZM48.1531 33.6766H35.5343V58.6608H48.1531V33.6766ZM48.1531 30.6264V19.7358H35.5343V30.6264H48.1531Z"
                  fill="#ABA8F7"
                ></path>
              </svg>
            </div>
            <h3 className="mb-1 text-xl font-semibold">Flexibility</h3>
            <p className="text-gray-600">
              Customize programs to suit the unique needs and goals of your
              institution.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why to choose US?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <div class="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
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

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              class="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
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
      <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why to choose US?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Expertise
            </h3>
            <p className="sm:text-lg mt-6">
              <ul>
                <li>
                  {" "}
                  Benefit from our team of experienced educators and industry
                  professionals.{" "}
                </li>
                <li>
                  Inspire a generation of fearless innovators who will shape the
                  future.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="project members"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6">
              All LocaleData projects are private. Each project can have
              multiple collaborators with different roles and access
              permissions. You determine who can see and edit your translations.
              Just add admins, developers, translators and configure their
              access rights.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left  text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="editor"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              No more syntax errors
            </h3>
            <p className="sm:text-lg mt-6">
              LocaleData provides you easy import/export functions for your YAML
              files. Use a simple editor with many predefined languages to
              manage your locales. LocaleData also supports multiple translation
              types, such as simple text, plural forms, numbers, booleans,
              symbols, arrays, ...
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="bulk editing"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Bulk editing
            </h3>
            <p className="sm:text-lg mt-6">
              Do you need to change the path of many translation keys at once?
              No problem, just use the bulk editing feature and enjoy the
              results.
            </p>
          </div>
        </div>
      </div>
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
