import React from "react";
import { Link } from "react-router-dom";

const CardHeroHomePage = ({
  imageUrl,
  Alt,
  title,
  description,
  link,
  buttonTextColor,
}) => {
  return (
    <>
      <div className="relative group overflow-hidden rounded-2xl shadow-xl h-96">
        <img
          src={imageUrl}
          alt={Alt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="mb-4">{description}</p>
          <Link
            to={link}
            className={`inline-block bg-white ${buttonTextColor} px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition`}
          >
            Explore →
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardHeroHomePage;
