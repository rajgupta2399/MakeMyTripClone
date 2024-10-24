import React, { useContext } from "react";
import { useSelector } from "react-redux";
import useHotelDetails from "@/components/hooks/useHotelDetails";
import { HotelDetailsId } from "@/components/context/HotelDetailsId";

const MoreImages = () => {
  useHotelDetails();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  return (
    <div className=" text-white px-16">
      <div className="centeralContainer mt-28 mb-8 border-2 rounded-lg flex flex-row flex-wrap py-2">
        {hotelDetail &&
          hotelDetail?.hotelImages.map((item, index) => (
            <div>
              <div className=" w-[280px] h-[200px] py-3 px-3">
                <img
                  src={item?.urlHd}
                  alt=""
                  className=" object-cover w-full h-full rounded-lg"
                />
              </div>
              <h6 className=" text-center font-semibold capitalize">
                {item?.caption}
              </h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoreImages;
