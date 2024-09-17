import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./StudentDataForm.css";

function StudentDataForm({ code, title }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    schoolOrCollegeName: "",
    branch: "",
    address: "",
    city: "",
    state: "",
    postCode: "",
    projectName: title,
    projectCode: code,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbxXof9plVk3i1caPrg7O2fpUtmXm1B-eaFKVP4LiEBQcFi8JhRQ7szYh0s6l9Pf_srV/exec";

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
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      const result = await response.text();
      if (result.includes("success")) {
        setSubmitted(true);
        toast.success("Great! Our team will connect with you soon.");
      } else {
        toast.error("Error: " + result);
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full border-1 p-4 max-w-[720px] bg-gray">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label
                  htmlFor="name"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="name"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="phone"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="email"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-1 pt-2">
                <label className="mb-1 block text-base font-medium text-[#07074D]">
                  Educational Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-1">
                      <input
                        type="text"
                        name="schoolOrCollegeName"
                        id="schoolOrCollegeName"
                        placeholder="School or College Name"
                        value={formData.schoolOrCollegeName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-1">
                      <input
                        type="text"
                        name="branch"
                        id="branch"
                        placeholder="Branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-1 pt-2">
                <label className="mb-1 block text-base font-medium text-[#07074D]">
                  Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter area"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-1">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-1">
                      <input
                        type="text"
                        name="postCode"
                        id="post-code"
                        placeholder="Post Code"
                        value={formData.postCode}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white text-input text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#07074D]">Thank you!</h2>
              <p className="mt-4 text-3xl text-gray-700">
                Your form has been successfully submitted.
              </p>
              <p className="mt-4 text-2xl text-gray-700">
                If you need any assistance, you can contact us at:
              </p>
              <div className="mt-4 text-3xl text-gray-700">
                <p>Phone: +91 9032310773, +91 8121369684</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@idea2tech.com"
                    className="text-3xl text-blue-500"
                  >
                    info@idea2tech.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDataForm;
