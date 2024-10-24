import React, { useContext, useEffect } from "react";
import { CountryContext } from "../context/CountryContext";
import { options } from "@/lib/constants";
import { useDispatch } from "react-redux";
import { addCityHotel } from "@/store/cityHotelSlice";
import { HotelCityContext } from "../context/HotelCityContext";

const useHotelByCity = () => {
  const { hotelCityData, setHotelCityData } = useContext(HotelCityContext);
  const { countryData, setCountryData } = useContext(CountryContext);
  const dispatch = useDispatch();
  const fetchCity = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${countryData.code}&cityName=${hotelCityData.city}`,
      options
    );
    const data = await res.json();
    dispatch(addCityHotel(data.data));
  };

  useEffect(() => {
    fetchCity();
  }, [hotelCityData]);
};

export default useHotelByCity;
