import React from "react";

const CardMountainBikingMTBSkill = ({svg, title, description}) => {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={svg}
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </>
  );
};

export default CardMountainBikingMTBSkill;
