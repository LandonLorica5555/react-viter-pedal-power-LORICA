import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-transparent absolute w-full z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-2xl font-bold text-white drop-shadow-lg"
              >
                PedalPower
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="text-white hover:text-green-300 transition duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                to="/road-biking"
                className="text-white hover:text-green-300 transition duration-300 font-medium"
              >
                Road
              </Link>
              <Link
                to="/mountain-biking"
                className="text-white hover:text-green-300 transition duration-300 font-medium"
              >
                MTB
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 bg-gray-900 bg-opacity-90 rounded-lg p-4">
              <Link
                to="/"
                className="block text-white hover:bg-green-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/road-biking"
                className="block text-white hover:bg-green-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Road Biking
              </Link>
              <Link
                to="/mountain-biking"
                className="block text-white hover:bg-green-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Mountain Biking
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
