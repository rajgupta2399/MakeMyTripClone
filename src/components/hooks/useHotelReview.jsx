import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "@/lib/constants";
import { addHotelReview } from "@/store/hotelReviewSlice";
import { HotelDetailsId } from "../context/HotelDetailsId";

const useHotelReview = () => {
  const { hotelId, setHotelId } = useContext(HotelDetailsId);
  const dispatch = useDispatch();
  const fetchHotelReview = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/reviews?hotelId=${hotelId.id}&limit=1000&timeout=4`,
      options
    );
    const data = await res.json();
    dispatch(addHotelReview(data.data));
    // console.log(data.data);
  };

  useEffect(() => {
    fetchHotelReview();
  }, [hotelId.id]);
};

export default useHotelReview;
