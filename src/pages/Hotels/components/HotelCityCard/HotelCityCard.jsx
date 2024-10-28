import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import useHotelFacility from "@/components/hooks/useHotelFacility";
import useHotelByCity from "@/components/hooks/useHotelByCity";
import { addCityHotel } from "@/store/cityHotelSlice";
import MainHotelCard from "./MainHotelCard";
import { HotelCityContext } from "@/components/context/HotelCityContext";
import { HotelRoomSkeletonCard } from "../Skeletons/hotelRoomSkeletonCard";

const HotelCityCard = () => {
  useHotelFacility();
  useHotelByCity();
  const { hotelCityData, setHotelCityData } = useContext(HotelCityContext);
  const facility = useSelector((store) => store.hotelFacility.hotelFacility);
  const cityHotel = useSelector((store) => store.cityHotel.cityHotel);
  const dispatch = useDispatch();

  const handleFacilityChange = (facility_id) => {
    const filterLogic = cityHotel.filter((hotel) =>
      Object.values(hotel.facilityIds).includes(facility_id)
    );
    dispatch(addCityHotel(filterLogic));
  };

  

  return (
    <div className="flex flex-col sm:h-[7500px] lg:flex-row gap-10 mb-10">
      {/* Hide filters on mobile */}
      {facility && facility.length > 0 ? (
        <div className="hidden lg:block w-[310px] border-r-2 h-full shadow-lg py-5">
          <h2 className="text-center text-red-600 uppercase font-bold text-lg mb-3">
            Filters
          </h2>
          {facility.map((item, index) => (
            <div key={index} className="flex px-5 gap-2">
              <input
                type="checkbox"
                id={`facility-${item.facility_id}`}
                name="facility"
                value={item.facility_id}
                className="mt-1 w-6 h-auto mb-2"
                onChange={() => handleFacilityChange(item.facility_id)}
              />
              <label
                htmlFor={`facility-${item.facility_id}`}
                className="text-md mb-2 text-ellipsis whitespace-nowrap overflow-hidden"
              >
                {item.facility}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton />
      )}

      <div className="flex flex-col w-full sm:h-[7500px] overflow-y-auto px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 py-0 rounded-lg">
        {cityHotel && cityHotel.length > 0 ? (
          <>
            <h1 className=" text-center font-semibold text-lg mb-4">
              Top Hotels In {hotelCityData.city}
            </h1>
            <div className="flex flex-wrap gap-5">
              {cityHotel.map((item, index) => (
                <Link
                  href={`/Hotels/HotelDetails/${item.id}`}
                  key={item.id}
                  style={{ textDecoration: "none" }}
                >
                  <MainHotelCard item={item} />
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-10">
            <p className="text-white">No Hotels available For This Filter</p>
            <HotelRoomSkeletonCard/>
            <HotelRoomSkeletonCard/>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelCityCard;
