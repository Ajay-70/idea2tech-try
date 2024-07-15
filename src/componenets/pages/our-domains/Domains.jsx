import React from "react";
import "./Domains.css";
import domainsData from "../../data/ourDomains.json";
import { useNavigate } from "react-router-dom";
function Domains({}) {
  const navigate = useNavigate();
  const handleKnowMore = (title) => {
    navigate("/domain-course", { state: { title: title } });
  };
  return (
    <div>
      {domainsData.map((data, index) => (
        <div key={index}>
          <div className=" domains">
            <div className="domain-img">
              <img className="img" src={data.imageSrc} alt="" />
            </div>
            <div className="domain-text mx-10">
              <h1 className="text-3xl px-4 lg:font-medium font-normal underline">
                {data.title}
              </h1>
              <p className="lg:text-xl  domain-content px-4">{data.content}</p>
              <button
                className="domain-btn bg-[#3C9AF5] hover:bg-[#5d6dff]"
                onClick={() => handleKnowMore(data.title)}
              >
                Know more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Domains;
