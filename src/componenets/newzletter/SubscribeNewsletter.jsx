import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SubscribeNewsletter = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyZ-7NU3LWxZXFsY8s2vVB-1rpWCbRQh7C_7ll9S2WYyvEH2G0MMNDhIp5XV3Qfk2VStg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Clear the form
        alert("Data sent successfully!");
      } else {
        e.target.reset();
        alert("Data sent successfully!");
      }
    } catch (error) {
      e.target.reset();
      alert("Data sent successfully!");
    }

    //     // Check for the Content-Type header
    //     let contentType = response.headers.get("Content-Type");
    //     if (!contentType) {
    //       // Handle case where Content-Type is missing
    //       console.warn("Content-Type header missing in response.");
    //       contentType = "text/plain"; // Default to plain text
    //     }

    //     // Determine response format based on Content-Type
    //     if (contentType.indexOf("application/json") !== -1) {
    //       const data = await response.json();
    //       console.log("Response data:", data);

    //       if (data.status === "success") {
    //         toast.success("Successfully subscribed to the newsletter!");
    //       } else {
    //         toast.error("Subscription failed. Please try again.");
    //       }
    //     } else {
    //       // Handle non-JSON responses
    //       const text = await response.text();
    //       console.log("Response text:", text);
    //       toast.error("Unexpected response format. Please try again later.");
    //     }

    //     // Clear the form after submission if needed
    //     e.target.reset();
    //   } catch (error) {
    //     console.error("Fetch error:", error);
    //     toast.error(`Failed to fetch: ${error.message}`);
    //   }
  };

  return (
    <div className="flex w-screen justify-center items-center">
      <div className="p-6">
        <div className="flex flex-wrap items-center mx-auto text-left border border-gray-200 rounded bg-gray-300 lg:flex-nowrap p-4 md:p-8 dark:border-gray-700">
          <div className="flex-1 w-full mb-5 sm:mb-3 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
            <h3 className="mb-2 text-2xl font-bold text-gray-700 dark:text-gray-200">
              Unlock Your Potential with Idea2Tech!
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
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
                  name="Email"
                  placeholder="Enter your email address"
                  className="flex-1 p-3   placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full p-3  text-white text-lg bg-[#3C9AF5] hover:bg-[#5d6dff] rounded-md sm:mt-0 sm:w-auto   whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SubscribeNewsletter;
