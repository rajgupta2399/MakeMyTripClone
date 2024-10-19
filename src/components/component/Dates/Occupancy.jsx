"use client";
import React from "react";
import { useState } from "react";

const Occupancy = () => {
  const [openOptions, setOpenOptions] = useState(true);
  const [options, setOptions] = useState({
    adult: 2,
    children: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? prev[name] + 1 : Math.max(prev[name] - 1, 1),
      };
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="relative w-full rounded-lg">
        {openOptions && (
          <div className="options py-3 px-10 bg-white rounded-lg shadow-inner text-black">
            {/* Adult Option */}
            <div className="optionItem flex justify-between items-center mb-4">
              <span className="optionText text-lg font-semibold pr-10">
                Adults
              </span>
              <div className="optionCounter flex items-center">
                <button
                  disabled={options.adult <= 2}
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-l-lg px-2 py-1"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber text-lg font-medium px-4">
                  {options.adult}
                </span>
                <button
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-r-lg px-2 py-1"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children Option */}
            <div className="optionItem flex justify-between items-center">
              <span className="optionText text-lg font-semibold pr-10">
                Children
              </span>
              <div className="optionCounter flex items-center">
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-l-lg px-2 py-1"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber text-lg font-medium px-4">
                  {options.children}
                </span>
                <button
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-r-lg px-2 py-1"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Occupancy;
