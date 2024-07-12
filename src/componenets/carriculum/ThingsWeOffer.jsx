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
    <div className="flex justify-center flex-wrap">
      {roboticsData.map((data, index) => (
        <div
          key={index}
          className="item-container lg:grid-cols-2 px-5 m-6 mb-7 border-spacing-3"
          onClick={() => handleKnowMore(data.title)}
        >
          <div
            className="ThingsWeOffer_compo mx-auto"
            style={{ width: "18rem" }}
          >
            <img
              src={data.imageSrc}
              className="img_compo card-img-top rounded-circle mx-auto"
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
