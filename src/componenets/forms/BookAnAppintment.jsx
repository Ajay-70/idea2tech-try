import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";

function BookAnAppintment() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2
        .init({
          client_id: "YOUR_CLIENT_ID",
          scope: "https://www.googleapis.com/auth/script.external_request",
        })
        .then(() => {
          gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(() => {
              setAuthToken(
                gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse()
                  .access_token
              );
            });
        });
    });
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("#contactForm");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwYz-UKFgdm8nuG4dxh_bY_bu6zdr4HGsR0CuCosRK3hMlsLSlspsAavaFbmZLN6O-epw/exec",
      {
        method: "POST",
        body: formDatab,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

return (
  <section className="bg-gray-50 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-4">
        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            In hac habitasse platea dictumst
          </p>
        </div>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="grid md:grid-cols-2">
          <div className="h-full pr-6">
            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis
              ante, ac tincidunt sem venenatis ut.
            </p>
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Our Address
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    1230 Maecenas Street Donec Road
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    New York, EEUU
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +1 (123) 456-7890
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mail: tailnext@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Working hours
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Monday - Friday: 08:00 - 17:00
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Saturday & Sunday: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
            <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Book Appointment
            </h2>
            <form
              id="contactForm"
              className="mt-8 space-y-4"
              method="POST"
              onSubmit={Submit(e)}
            >
              <div className="flex">
                <label
                  htmlFor="Name"
                  className="mb-2.5 block w-32 flex-none text-gray-600 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  className="w-full flex-auto rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  required
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="Email"
                  className="mb-2.5 block w-32 flex-none text-gray-600 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  id="Email"
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  className="w-full flex-auto rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  required
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="Mobile"
                  className="mb-2.5 block w-32 flex-none text-gray-600 dark:text-slate-300"
                >
                  Mobile
                </label>
                <input
                  id="Mobile"
                  type="text"
                  name="Mobile"
                  placeholder="Enter your Mobile"
                  className="w-full flex-auto rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Message"
                  className="mb-2.5 block text-gray-600 dark:text-slate-300"
                >
                  Message
                  <textarea
                    id="Message"
                    name="Message"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  ></textarea>
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BookAnAppintment;
