import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import useHotelFacility from "@/components/hooks/useHotelFacility";

const HotelCityCard = () => {
  useHotelFacility();
  const dispatch = useDispatch();
  const facility = useSelector((store) => store.hotelFacility.hotelFacility);
  //   const cityHotel = useSelector((store) => store.cityHotel.cityHotel);

  const handleFacilityChange = (facility_id) => {
    // const filterLogic = cityHotel.filter((hotel) =>
    //   Object.values(hotel.facilityIds).includes(facility_id)
    // );
    // dispatch(addCityHotel(filterLogic));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Hide filters on mobile */}
      {facility && facility.length > 0 ? (
        <div className="hidden lg:block w-[400px] border-r-2 border-white h-full py-3">
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
                className="text-lg mb-2 text-ellipsis whitespace-nowrap overflow-hidden"
              >
                {item.facility}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton />
      )}

      {/* <div className="flex flex-col w-full h-screen sm:h-[150vh] overflow-y-auto px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 py-5 rounded-lg">
      {cityHotel && cityHotel.length > 0 ? (
        <div className="flex flex-wrap gap-5">
          {cityHotel.map((item, index) => (
            <Link to={`/HotelDetails/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
              <MainHotelCard item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <p className="text-white">No Hotels available For This Filter</p>
          <NewSkeletonContainer />
        </div>
      )}
    </div> */}
    </div>
  );
};

export default HotelCityCard;
