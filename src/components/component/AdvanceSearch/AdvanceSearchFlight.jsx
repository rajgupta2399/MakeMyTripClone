"use client";
import React from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Dates/CheckInDate";
import { CheckOutDate } from "../Dates/CheckOutDate";
import Occupancy from "../Dates/Occupancy";
import ContentSwitcher from "./ContentSwitcher";
import { Location } from "../Dates/Location";

const AdvanceSearchFlight = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`rounded-lg sm:relative w-[calc(100% - 40px)] ml-0 sm:h-[235px] h-[360px] mb-0 p-4 flex flex-col sm:flex-row sm:gap-4 items-start justify-center ${
          theme === "light"
            ? "bg-white text-[#1D232A] bg-gradient-to-br from-purple-700 to-violet-900"
            : "bg-[#30373e] text-white bg-gradient-to-br from-gray-800 to-gray-900"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Check-In Date
            </label>
            <CheckInDate />
          </div>

          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Check-Out Date
            </label>
            <CheckOutDate />
          </div>
        </div>

        <div className="flex-1">
          <label
            className={`block text-sm font-medium ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Location
          </label>
          <Location />
        </div>

        <div className="flex-1">
          <label
            className={`block text-sm font-medium ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Guests
          </label>
          <Occupancy />
        </div>
      </div>
    </>
  );
};

export default AdvanceSearchFlight;
