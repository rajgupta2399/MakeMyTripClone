"use client";
import React from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Dates/CheckInDate";
import { CheckOutDate } from "../Dates/CheckOutDate";
import Occupancy from "../Dates/Occupancy";
import { Location } from "../Dates/Location";
import Link from "next/link";

const AdvanceSearchHotel = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`rounded-lg sm:relative ml-0 sm:h-[235px] h-[520px] sm:mb-0 p-4 flex flex-col gap-4 sm:flex-row sm:gap-4 sm:items-center sm:justify-center ${
          theme === "light"
            ? "bg-white text-[#1D232A] bg-gradient-to-br from-purple-700 to-violet-900"
            : "bg-[#30373e] text-white bg-gradient-to-br from-gray-800 to-gray-900"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-1 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Check-In Date
            </label>
            <CheckInDate />
          </div>

          <div className="flex-1 mb-1">
            <label
              className={`block text-sm font-medium mb-1 ${
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
            className={`block text-sm font-medium mb-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Guests
          </label>
          <Occupancy />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-1 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Location
            </label>
            <Location />
          </div>

          <div className=" flex justify-center items-center">
            <Link href={"/Hotels/"}>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  Search Hotels
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceSearchHotel;
