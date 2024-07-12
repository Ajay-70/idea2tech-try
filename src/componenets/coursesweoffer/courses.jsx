import React from "react";
import Courses from "../data/courses.json";
import "./CoursesWeOffer.css";

function CoursesWeOffer() {
  return (
    <div>
      <div className="my-5 flex justify-center flex-wrap ">
        {Courses.map((data, index) => (
          <div key={index} className=" md:w-1/3  mb-4">
            <div className="CoursesWeOffer mx-auto" style={{ width: "20rem" }}>
              <img
                src={data.imageSrc}
                className="img_compo card-img-top  rounded-md"
                alt={data.title}
              />
              <div className="text-center py-2 ">
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
