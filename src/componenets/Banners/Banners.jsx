import React from "react";
import "../Banners/Banner.css";

const Banners = (props) => {
  console.log(props.button_name);
  return (
    <div className="bannnner">
      <h1 className="lg:text-4xl font-bold border-b-2 border-white md:text-2xl sm:text-xl lg:p-3">
        {props.name}
      </h1>
      {/* Conditionally render the button based on button_name */}
      {props.button_name != null && (
        <button className="bg-gray-700 hover:bg-[#e94f6e] px-5 text-white font-bold py-2 px-4 rounded-full">
          {props.button_name}
        </button>
      )}
    </div>
  );
};

export default Banners;
