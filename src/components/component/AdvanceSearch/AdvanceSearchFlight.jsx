"use client";
import React from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Dates/CheckInDate";
import { CheckOutDate } from "../Dates/CheckOutDate";
import Occupancy from "../Dates/Occupancy";
import { Location } from "../Dates/Location";
import Link from "next/link";
import { City } from "../Dates/City";
import { Adults } from "../Dates/Adults";
import { Children } from "../Dates/Children";
// import Airports from "../Dates/Airports";
import { Airports } from "../Dates/Airports";
import { DestinationAirports } from "../Dates/DestinationAirport";

const AdvanceSearchFlight = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg sm:relative ml-0 sm:mb-0 pt-4 pb-6 px-4 flex flex-col gap-6 sm:flex-row sm:gap-20 sm:items-center sm:justify-center ${
        theme === "light"
          ? "bg-white text-[#1D232A] bg-gradient-to-br from-purple-700 to-violet-900"
          : "bg-[#30373e] text-white bg-gradient-to-br from-gray-800 to-gray-900"
      }`}
    >
      {/* Row 1 */}
      <div>
        <h2
          className={`text-lg font-bold text-center mb-2 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          From
        </h2>
        <div className="flex flex-col gap-3">
          {/* Location */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Country
            </label>
            <Location />
          </div>
          {/* City */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              City
            </label>
            <City />
          </div>

          {/* City */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Airport
            </label>
            <Airports />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <h2
          className={`text-lg font-bold text-center mb-2 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Destination
        </h2>
        <div className="flex flex-col gap-3">
          {/* Location */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Country
            </label>
            <Location />
          </div>
          {/* City */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              City
            </label>
            <City />
          </div>

          {/* City */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Airport
            </label>
            <DestinationAirports />
          </div>
        </div>
      </div>

      <div>
        <h2
          className={`text-lg font-bold text-center mb-2 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Travellers
        </h2>
        <div className="flex flex-col gap-3">
          {/* Location */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Adults
            </label>
            <Adults />
          </div>
          {/* City */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Childrens
            </label>
            <Children />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Link href={"/Flights/"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Search Flights
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearchFlight;
