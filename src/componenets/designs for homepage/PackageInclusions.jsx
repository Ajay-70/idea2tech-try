import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "./PackageInclusions.css";

const PackageInclusions = () => {
  const currentURL = window.location.href;

  // Check if the URL contains 'iot'
  const isIotPage = currentURL.includes("/iot/");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-lg rounded-lg">
            <div className="card-header bg-gray-100 text-center py-4">
              <h2 className="text-2xl font-bold text-gray-800">
                What's Included
              </h2>
            </div>
            <div className="card-body py-4">
              <ul className="list-group list-group-flush">
                {isIotPage ? (
                  <li className="list-group-item flex items-center py-3 justify-center">
                    <img
                      src="/images/PackageInclusions/kit img.png"
                      className="logo-sm"
                      alt=""
                    />
                    <span className="text-lg font-medium text-gray-700 text-center">
                      Hardware Kit
                    </span>
                    <img
                      src="/images/PackageInclusions/right.png"
                      className="logo-right-sm"
                      alt=""
                    />
                  </li>
                ) : (
                  <li className="list-group-item flex items-center py-3 justify-center">
                    <img
                      src="/images/PackageInclusions/software-code.jpg"
                      className="logo-sm"
                      alt="Code"
                    />
                    <span className="text-lg font-medium text-gray-700 text-center">
                      Code
                    </span>
                    <img
                      src="/images/PackageInclusions/right.png"
                      className="logo-right-sm"
                      alt="Right Arrow"
                    />
                  </li>
                )}
                <li className="list-group-item flex items-center py-3 justify-center">
                  <img
                    src="/images/PackageInclusions/document.png"
                    className="logo-sm"
                    alt=""
                  />
                  <span className="text-lg font-medium text-gray-700 text-center">
                    Documentation
                  </span>
                  <img
                    src="/images/PackageInclusions/right.png"
                    className="logo-right-sm"
                    alt=""
                  />
                </li>
                <li className="list-group-item flex items-center py-3 justify-center">
                  <img
                    src="/images/PackageInclusions/video.png"
                    className="logo-sm"
                    alt=""
                  />
                  <span className="text-lg font-medium text-gray-700 text-center">
                    Related Videos
                  </span>
                  <img
                    src="/images/PackageInclusions/right.png"
                    className="logo-right-sm"
                    alt=""
                  />
                </li>
                <li className="list-group-item flex items-center py-3 justify-center">
                  <img
                    src="/images/PackageInclusions/support.png"
                    className="logo-sm"
                    alt=""
                  />
                  <span className="text-lg font-medium text-gray-700 text-center">
                    Online Technical Support
                  </span>
                  <img
                    src="/images/PackageInclusions/right.png"
                    className="logo-right-sm"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageInclusions;
