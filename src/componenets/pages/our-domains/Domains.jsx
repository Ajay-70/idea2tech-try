import React from "react";
import "./Domains.css";
// import domainsData from "../../data/ourDomains.json";
import domainsData from "../../data/ourDomains copy.json";
import { useNavigate } from "react-router-dom";
import "./Domains.css";
function Domains({}) {
  const navigate = useNavigate();
  const handleKnowMore = (title) => {
    navigate("/domain-course", { state: { title: title } });
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {domainsData.map((data, index) => (
        <div key={index}>
          <div className=" domains">
            <div className="domain-img">
              <img className="img" src={data.imageSrc} alt="" />
            </div>
            {/* <div className="domain-text mx-10">
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
            </div> */}
            <div className="domain-text mx-10">
              <h1 className="text-3xl px-4 lg:font-medium font-normal underline">
                {data.title}
              </h1>
              <p className="lg:text-xl px-4 my-4">
                {data.content.map((point, index) => (
                  <span key={index} className="block domain-disc mb-2">
                    {point}
                  </span>
                ))}
              </p>
              <button
                className="domain-btn bg-[#3C9AF5] hover:bg-[#5d6dff] text-white px-4 py-2 rounded mt-4"
                onClick={() => handleKnowMore(data.title)}
              >
                Know more
              </button>
            </div>
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Domains;
