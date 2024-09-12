// ThingsWeOffer.js
import React from "react";
import roboticsData from "../data/whatweoffer.json";
import { useNavigate } from "react-router";
import "./ThingsWeOffer.css";

function ThingsWeOffer() {
  const navigate = useNavigate();

  const handleKnowMore = (title) => {
    navigate("/domain-course", { state: { title: title } });
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="content min-[1328px]:px-5">
      {roboticsData.map((data, index) => (
        <div
          key={index}
          className="item-container "
          onClick={() => handleKnowMore(data.title)}
        >
          <div className="ThingsWeOffer_compo ">
            <img
              src={data.imageSrc}
              className="img_compo card-img-top rounded-circle "
              alt={data.title}
            />
            <div className="text-center py-2">
              <p className="fonttext font-bold">{data.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThingsWeOffer;
