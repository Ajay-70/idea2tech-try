// CoursesWeOffer.js
import React from "react";
import Courses from "../data/courses.json";
import "./CoursesWeOffer.css";

function CoursesWeOffer() {
  return (
    <div>
      <div className=" my-5">
        {Courses.map((data, index) => (
          <div key={index} className="mx-3 flex  justify-center">
            <div className="CoursesWeOffer " >
              <img
                src={data.imageSrc}
                className="img_compo card-img-top rounded-md"
                alt={data.title}
              />
              <div className="text-center py-2">
                <p className="lg:text-xl sm:text-l font-bold">{data.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesWeOffer;
