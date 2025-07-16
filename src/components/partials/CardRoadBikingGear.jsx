import React from "react";

const CardRoadBikingGear = ({title}) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="h-16 mb-2 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-medium">{title}</p>
      </div>
    </>
  );
};

export default CardRoadBikingGear;
