"use client";
import React, { useContext } from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Dates/CheckInDate";
import { CheckOutDate } from "../Dates/CheckOutDate";
import Occupancy from "../Dates/Occupancy";
import { Location } from "../Dates/Location";
import { useRouter } from "next/router";
import { useState } from "react";
import { City } from "../Dates/City";
import { HotelSearchContext } from "@/components/context/HotelSearch";

const AdvanceSearchHotel = () => {
  const { theme } = useTheme();
  const router = useRouter();
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

  // State variables for error messages
  const [errors, setErrors] = useState({
    checkInDate: "",
    checkOutDate: "",
    location: "",
    city: "",
    occupancy: "",
  });

  // Validation function
  const handleSearch = () => {
    const newErrors = {};

    // Validation checks
    if (!checkInDate) newErrors.checkInDate = "Please select a check-in date.";
    if (!checkOutDate)
      newErrors.checkOutDate = "Please select a check-out date.";
    if (!guestNationality) newErrors.guestNationality = "Please select a country.";
    if (!city) newErrors.city = "Please select a city.";
    if (!occupancy) newErrors.occupancy = "Please select the number of guests.";

    if (
      checkInDate &&
      checkOutDate &&
      new Date(checkInDate) >= new Date(checkOutDate)
    ) {
      newErrors.checkOutDate = "Check-out date must be after check-in date.";
    }

    setErrors(newErrors);

    // Save validated values to context and redirect
    if (Object.keys(newErrors).length === 0) {
      setCheckInDate(checkInDate);
      setCheckOutDate(checkOutDate);
      setCity(city);
      setOccupancy(occupancy);
      setGuestNationality(guestNationality);
      setCurrency(currency);
      setHotelIds(hotelIds);

      router.push("/Hotels/");
    }
  };
  return (
    <>
      <div
        className={`rounded-lg sm:relative ml-0 sm:h-[280px] h-[520px] sm:mb-0 p-4 flex flex-col gap-4 sm:flex-col sm:gap-4 sm:items-center sm:justify-center  ${
          theme === "light"
            ? "bg-white text-[#1D232A] bg-gradient-to-br from-purple-700 to-violet-900"
            : "bg-[#30373e] text-white bg-gradient-to-br from-gray-800 to-gray-900"
        }`}
      >
        {/* Form fields */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:items-center sm:justify-center">
          {/* Check-in and check-out dates */}
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
              {errors.checkInDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.checkInDate}
                </p>
              )}
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
              {errors.checkOutDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.checkOutDate}
                </p>
              )}
            </div>
          </div>

          {/* Other fields */}
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Guests
            </label>
            <Occupancy />
            {errors.occupancy && (
              <p className="text-red-500 text-sm mt-1">{errors.occupancy}</p>
            )}
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
              {errors.guestNationality && (
                <p className="text-red-500 text-sm mt-1">{errors.guestNationality}</p>
              )}
            </div>

            <div className="flex-1">
              <label
                className={`block text-sm font-medium mb-1 ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                City
              </label>
              <City />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
          </div>
        </div>

        {/* Search button */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleSearch}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Search Hotels
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdvanceSearchHotel;
