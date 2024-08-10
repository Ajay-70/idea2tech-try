import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewEngineeringProjects.css";

// Import the JSON files
import miniProjectsData from "../../../data/mini-projects-data.json";
import majorProjectsData from "../../../data/major-projects-data.json";

function ViewEngineeringProjects() {
  const { projectType } = useParams();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Determine which data to load based on projectType
    if (projectType === "mini-projects") {
      setTableData(miniProjectsData);
    } else if (projectType === "major-projects") {
      setTableData(majorProjectsData);
    }
  }, [projectType]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl text-center font-bold mb-4">
        {projectType
          .replace("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
        List
      </h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 capitalize py-2">ID</th>
            <th className="px-4 capitalize  py-2">Project Name</th>
            <th className="px-4 capitalize py-2">Code</th>
            <th className="px-4 capitalize py-2">link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">
                <div className="custom-button">View</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEngineeringProjects;
