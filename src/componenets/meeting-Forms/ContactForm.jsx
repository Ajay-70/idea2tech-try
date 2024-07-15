import React from "react";
import Rating from "../rating/Rating";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("Rating", rating);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby7Ru0KztXWaiOeceROXenK-WDiC4lEGdwBZESbVP65rgiSMjdzhNtyL9ss2Q8ILkC_/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Data successfully sent!");
    } else {
      alert(`HTTP error! status: ${response.status}`);
    }
  };
  return (
    <div className="p-8 mt-8 max-w-lg mx-auto">
      <h1 className="text-5xl border-b-4 p-3 border-indigo-500 text-gray-800 font-bold mb-4">
        Show your Interest
      </h1>

      <h1 className="text-4xl text-gray-800 font-bold mb-4">Contact Form</h1>
      <form id="ContactForm" onSubmit={handleSubmit}>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="name"
              className="leading-7 py-4 text-lg text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="email"
              className="leading-7 py-4 text-lg text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="leading-7 py-4 text-lg text-gray-900"
          >
            Rate Us
          </label>
          <Rating />
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 py-4 text-lg text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <div>
            <button
              type="submit"
              className="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
