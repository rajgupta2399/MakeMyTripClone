import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HotelDetailsId } from "../context/HotelDetailsId";
import { addHotelDetail } from "@/store/hotelDetailSlice";
import { options } from "@/lib/constants";

const useHotelDetails = () => {
  //   const { id } = useContext(HotelDetailsId); // Assuming setId is not needed here
  const { hotelId, setHotelId } = useContext(HotelDetailsId);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const fetchHotelDetails = async () => {
    try {
      setLoading(true); // Start loading before API call
      const res = await fetch(
        `https://api.liteapi.travel/v3.0/data/hotel?hotelId=${hotelId.id}&timeout=4`,
        options
      );
      const data = await res.json();

      if (res.ok) {
        dispatch(addHotelDetail(data.data));
        console.log(data.data);

        // Dispatch only if successful
      } else {
        setError("Failed to fetch hotel details");
      }
    } catch (error) {
      setError("An error occurred while fetching hotel details");
    } finally {
      setLoading(false); // Stop loading once the request completes
    }
  };

  useEffect(() => {
    if (hotelId.id) {
      fetchHotelDetails();
    }
  }, [hotelId.id]); // Re-fetch only when id changes

  return { loading, error }; // Return loading and error state for component usage
};

export default useHotelDetails;
