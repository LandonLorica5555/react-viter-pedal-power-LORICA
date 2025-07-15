import React from "react";
import { Link } from "react-router-dom";

const ButtonHeroHomePage = ({ link, buttonColor, hoverColor, buttonText }) => {
  return (
    <>
      <Link
        to={link}
        className={`${buttonColor} ${hoverColor} text-white px-8 py-3 rounded-full font-medium transition transform`}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default ButtonHeroHomePage;
