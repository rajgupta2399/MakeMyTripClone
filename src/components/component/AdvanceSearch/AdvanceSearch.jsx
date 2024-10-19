"use client";
import React from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Dates/CheckInDate";
import { CheckOutDate } from "../Dates/CheckOutDate";
import Occupancy from "../Dates/Occupancy";
import ContentSwitcher from "./ContentSwitcher";

const AdvanceSearch = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 sm:-mt-20 rounded-lg sm:relative z-[100] w-[85%] ${
          theme === "light"
            ? "bg-white text-[#1D232A]"
            : "bg-[#30373e] text-white"
        }`}
      >
        <div className="p-4 flex flex-col sm:flex-row sm:gap-4 items-center justify-between rounded-lg">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              CheckIn Date
            </label>
            <CheckInDate />
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              CheckOut Date
            </label>
            <CheckOutDate />
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Guest
            </label>
            <Occupancy />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceSearch;
