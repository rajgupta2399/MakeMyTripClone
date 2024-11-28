"use client";
import React, { useContext, useState } from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Dates/CheckInDate";
import { CheckOutDate } from "../Dates/CheckOutDate";
import Occupancy from "../Dates/Occupancy";
import { Location } from "../Dates/Location";
import Link from "next/link";
import { City } from "../Dates/City";
import { Adults } from "../Dates/Adults";
import { Children } from "../Dates/Children";
import { Airports } from "../Dates/Airports";
import { DestinationAirports } from "../Dates/DestinationAirport";
import { DepartureDate } from "../Dates/DepartureDate";
import { TravelClass } from "../Dates/TravelClass";
import { AirportOfferContext } from "@/components/context/AirportOfferContex";
import { UserRound } from "lucide-react";
import { useRouter } from "next/router";

const AdvanceSearchFlight = () => {
  const {
    departureCountry,
    setDepartureCountry,
    departureCity,
    setDepartureCity,
    arrivalCountry,
    setArrivalCountry,
    arrivalCity,
    setArrivalCity,
    travelAdult,
    setTravelAdult,
    travelChildren,
    setTravelChildren,
    departureDate,
    setDepartureDate,
    travelClass,
    setTravelClass,
  } = useContext(AirportOfferContext);

  const { theme } = useTheme();
  const router = useRouter();
  // State to handle validation errors
  const [errors, setErrors] = useState({
    departureCountry: "",
    departureCity: "",
    arrivalCountry: "",
    arrivalCity: "",
    travelAdult: "",
    travelChildren: "",
    departureDate: "",
    travelClass: "",
  });

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    let formIsValid = true;

    // Check if all required fields are filled
    if (!departureCountry) {
      newErrors.departureCountry = "Departure country is required";
      formIsValid = false;
    }
    if (!departureCity) {
      newErrors.departureCity = "Departure city is required";
      formIsValid = false;
    }
    if (!arrivalCountry) {
      newErrors.arrivalCountry = "Arrival country is required";
      formIsValid = false;
    }
    if (!arrivalCity) {
      newErrors.arrivalCity = "Arrival city is required";
      formIsValid = false;
    }
    if (!travelAdult) {
      newErrors.travelAdult = "Number of adults is required";
      formIsValid = false;
    }
    if (!travelChildren) {
      newErrors.travelChildren = "Number of children is required";
      formIsValid = false;
    }
    if (!departureDate) {
      newErrors.departureDate = "Departure date is required";
      formIsValid = false;
    }
    if (!travelClass) {
      newErrors.travelClass = "Travel class is required";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSearchClick = () => {
    if (validateForm()) {
      // Only proceed if validation passes
      setDepartureCountry(departureCountry);
      setDepartureCity(departureCity);
      setArrivalCountry(arrivalCountry);
      setArrivalCity(arrivalCity);
      setTravelAdult(travelAdult);
      setTravelChildren(travelChildren);
      setDepartureDate(departureDate);
      setTravelClass(travelClass);

      // Proceed with the search logic
      console.log(
        departureCountry,
        departureCity,
        arrivalCountry,
        arrivalCity,
        travelAdult,
        travelChildren,
        departureDate,
        travelClass
      );
      // For example, navigate to the flights offers page or perform another action
      router.push("/Flights/Offers/");
    }
  };

  return (
    <div
      className={`rounded-lg sm:relative ml-0 sm:mb-0 pt-4 pb-6 px-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-start gap-0 sm:gap-20 ${
        theme === "light"
          ? "bg-white text-[#1D232A] bg-gradient-to-br from-purple-700 to-violet-900"
          : "bg-[#30373e] text-white bg-gradient-to-br from-gray-800 to-gray-900"
      }`}
    >
      {/* From Section */}
      <div className="sm:flex-1">
        <h2
          className={`text-lg font-bold text-center mb-0 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          From
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Country
            </label>
            <Location />
            {errors.departureCountry && (
              <p className="text-red-500 text-xs">{errors.departureCountry}</p>
            )}
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              City
            </label>
            <City />
            {errors.departureCity && (
              <p className="text-red-500 text-xs">{errors.departureCity}</p>
            )}
          </div>
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

      {/* Destination Section */}
      <div className="sm:flex-1">
        <h2
          className={`text-lg font-bold text-center mb-0 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Destination
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Country
            </label>
            <Location />
            {errors.arrivalCountry && (
              <p className="text-red-500 text-xs">{errors.arrivalCountry}</p>
            )}
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              City
            </label>
            <City />
            {errors.arrivalCity && (
              <p className="text-red-500 text-xs">{errors.arrivalCity}</p>
            )}
          </div>
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

      {/* Travellers Section */}
      <div className="sm:flex-1">
        <h2
          className={`text-lg font-bold text-center mb-0 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Travellers
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Adults
            </label>
            <Adults />
            {errors.travelAdult && (
              <p className="text-red-500 text-xs">{errors.travelAdult}</p>
            )}
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Children
            </label>
            <Children />
            {errors.travelChildren && (
              <p className="text-red-500 text-xs">{errors.travelChildren}</p>
            )}
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium mb-0 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Departure Date
            </label>
            <DepartureDate />
            {errors.departureDate && (
              <p className="text-red-500 text-xs">{errors.departureDate}</p>
            )}
          </div>
        </div>
      </div>

      {/* Travel Class and Search Flights Button */}
      <div className="w-full flex flex-col sm:flex-row sm:mx-28 justify-around items-center mt-3">
        <div className="flex-1 sm:w-auto sm:pl-10">
          <label
            className={`block text-sm font-medium sm:pl-14 mb-0 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Travel Class
          </label>
          <TravelClass />
          {errors.travelClass && (
            <p className="text-red-500 text-xs">{errors.travelClass}</p>
          )}
        </div>

        <div className="sm:pr-40 sm:mt-1">
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={handleSearchClick}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Search Flights
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearchFlight;
