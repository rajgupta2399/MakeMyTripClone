"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HotelSearchContext } from "@/components/context/HotelSearch";

const Occupancy = () => {
  const { theme } = useTheme();

  const [openOptions, setOpenOptions] = useState(true);
  const [options, setOptions] = useState({
    adult: 2,
    children: 1,
  });

  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    city,
    setCity,
    occupancy,
    setOccupancy,
    guestNationality,
    setGuestNationality,
    currency,
    setCurrency,
    hotelIds,
    setHotelIds,
  } = useContext(HotelSearchContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? prev[name] + 1 : Math.max(prev[name] - 1, 1),
      };
    });
  };

  const occupancies = [
    {
      adults: options.adult,
      children: [options.children > 0 ? options.children : 1],
    },
  ];

  useEffect(() => {
    setOccupancy(occupancies);
  }, [options]);

  return (
    <div className="flex justify-center ">
      <div className="relative w-full rounded-lg">
        {openOptions && (
          <div
            className={`options py-3 px-10 rounded-lg shadow-md ${
              theme === "light"
                ? "bg-white text-[#1D232A] bg-gradient-to-br from-purple-700 to-violet-900"
                : "bg-[#30373e] text-white bg-gradient-to-br from-gray-700 to-gray-900"
            }`}
          >
            {/* Adult Option */}
            <div className="optionItem flex justify-center items-center mb-4">
              <span className="optionText text-lg font-semibold sm:pr-14 pr-3 block">
                Adults
              </span>
              <div className="optionCounter flex items-center">
                <button
                  disabled={options.adult <= 2}
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-full px-2 py-0"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber text-lg font-medium px-4">
                  {options.adult}
                </span>
                <button
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-full px-2 py-0"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children Option */}
            <div className="optionItem flex justify-center items-center">
              <span className="optionText text-lg font-semibold sm:pr-10 pr-3">
                Children
              </span>
              <div className="optionCounter flex items-center">
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-full px-2 py-0"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber text-lg font-medium px-4">
                  {options.children}
                </span>
                <button
                  className="optionCounterButton bg-gray-300 hover:bg-gray-400 text-lg font-bold text-gray-700 rounded-full px-2 py-0"
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
