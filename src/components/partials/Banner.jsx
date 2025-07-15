import React from "react";

const Banner = ({bgColor, imageUrl, Alt, title, description}) => {
  return (
    <>
      <div className="relative h-96">
        <div className={`absolute inset-0 ${bgColor} opacity-60`}></div>
        <img
          src={imageUrl}
          alt={Alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
