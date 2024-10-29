import React, { useContext, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { HotelDetailsId } from "@/components/context/HotelDetailsId";
import { HotelSearchContext } from "@/components/context/HotelSearch";
import Link from "next/link";
import { SkeletonCard } from "../HotelCarousel/SkeletonCard";
import { useRouter } from "next/router";

const HotelRoom = ({ strongTagText, options, formattedDates, item }) => {
  const { hotelId, setHotelId } = useContext(HotelDetailsId);
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
  setHotelIds(hotelId);

  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  const handleClick = (item) => {
    sessionStorage.setItem("selectedItem", JSON.stringify(item));
    // Navigate to the route
    router.push("/Hotels/Prebooking");
  };

  return (
    <>
      <div className="centeralContainer mt-5 border-2 rounded-lg bg-[#14181B]">
        <div className="imageBox">
          <div className="images flex flex-col lg:flex-row w-full gap-2 px-2 py-2">
            {/* Main Image Section */}
            <div className="flex gap-2 flex-col lg:flex-row border-2 sm:border-2 md:border-2 lg:border-2 xl:border-2 px-4 ml-1 py-3 mx-0 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2 rounded-lg w-full lg:w-[70%]">
              <div className="w-full lg:w-[490px] lg:h-[400px] rounded-lg">
                <img
                  src={item?.photos?.[0]?.url}
                  alt=""
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <div className="rounded-lg h-[195px]">
                  <img
                    src={item?.photos?.[1]?.url || "fallback_image_url"} // Provide fallback
                    alt=""
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div className="relative rounded-lg h-[195px]">
                  <img
                    src={item?.photos?.[2]?.url || "fallback_image_url"} // Provide fallback
                    alt="Hotel"
                    className="rounded-xl object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                    <Link
                      href={"/Hotels/HotelDetails/MoreImages"}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="text-white font-semibold">
                        MORE IMAGES
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Details Section */}
            <div className="w-full lg:w-[30%] border-2 py-3 my-2 mr-2 rounded-lg">
              <div className="hotelDetails h-full">
                <h6 className="text-[18px] text-center py-2 px-3">
                  {item?.roomName}
                </h6>
                <h6 className="text-sm text-center px-3 text-white">
                  {item?.description}
                </h6>
                <div className="cap px-4">
                  <h6 className="text-sm text-white">
                    Max Adults: {item?.maxAdults}
                  </h6>
                  <h6 className="text-sm text-white">
                    Max Children: {item?.maxChildren}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Amenities Section */}
        <div className="marquee">
          <div className="text px-2 py-2">
            <h6 className="text-[#0077b6] text-md px-4 text-[18px]">
              Room Amenities
            </h6>
          </div>
          <div className="marquee-content">
            <ul className="text-white flex justify-between flex-wrap gap-3 px-4 lg:px-7">
              {item.roomAmenities.slice(0, 30).map((amenity) => (
                <li key={amenity.amenitiesId} className="font-semibold">
                  <FiberManualRecordIcon className="px-1 text-green-500 mb-1" />
                  {amenity.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Book Now Button Section */}
        <div className="mt-3 mb-4">
          <div className="w-full flex justify-center">
            <button
              className="text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-[80%] sm:w-[50%] lg:w-[30%]"
              onClick={() => handleClick(item)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelRoom;
