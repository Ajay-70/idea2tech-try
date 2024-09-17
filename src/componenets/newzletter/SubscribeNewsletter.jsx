import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeNewsletter = () => {
  const [formData, setFormData] = useState({
    email: "", // Fix typo from "eamil" to "email"
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
      "https://script.google.com/macros/s/AKfycbxPzxuoUSGxsh8r9L4wOslK9dKlpbkeUMuBiejdUoMfWBymNzsNuhNy_LMd-6fZY-wS/exec";

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
          email: "", // Clear the form after success
        });
      } else {
        toast.error("Error: " + result);
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    }
  };

  return (
    <div className="flex w-screen justify-center items-center">
      <div className="p-6">
        <div className="flex flex-wrap items-center mx-auto text-left border border-gray-200 rounded bg-gray-300 lg:flex-nowrap p-4 md:p-8">
          <div className="flex-1 w-full mb-5 sm:mb-3 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
            <h3 className="mb-2 text-2xl font-bold text-gray-700">
              Unlock Your Potential with Idea2Tech!
            </h3>
            <p className="text-gray-500">
              Subscribe to our newsletter for the latest in innovation,
              creativity, and exclusive insights shaping tomorrow's tech
              leaders.
            </p>
          </div>
          <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
            <form id="SubscribeForm" onSubmit={handleSubmit}>
              <input type="hidden" name="tags" value="earlyaccess" />
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  id="email"
                  name="email" // Ensure this matches the state key
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="flex-1 p-3 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full p-3 text-white text-lg bg-[#3C9AF5] hover:bg-[#5d6dff] rounded-md sm:mt-0 sm:w-auto whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Uncommented to show toast notifications */}
    </div>
  );
};

export default SubscribeNewsletter;
