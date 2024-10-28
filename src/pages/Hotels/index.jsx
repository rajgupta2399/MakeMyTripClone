import TransitionEffect from "@/components/component/Animation/TransitionEffect ";
import { BackgroundLinesDemo } from "@/components/component/Footer/BackgroundLinesDemo";
import Head from "next/head";
import React, { useContext } from "react";
import { CountryContext } from "@/components/context/CountryContext";
import { useSelector } from "react-redux";
import useCountryCodeHotel from "@/components/hooks/useCountryCodeHotel";
import HotelChainCarousel from "./components/HotelCarousel/HotelChainCarousel";
import useHotelFacility from "@/components/hooks/useHotelFacility";
import useHotelByCity from "@/components/hooks/useHotelByCity";
import HotelCityCard from "./components/HotelCityCard/HotelCityCard";

const Page = () => {
  useCountryCodeHotel();
  useHotelFacility();
  useHotelByCity();
  const { countryData, setCountryData } = useContext(CountryContext);
  const country = useSelector((store) => store.country.CountryHotelCode);
  // console.log(country);
  return (
    <>
      <Head>
        <title>MMT | Hotels Booking</title>
        <meta name="description" content="any-description" />
      </Head>
      <div>
        <div className=" sm:px-16 mt-28">
          <HotelChainCarousel />
          <HotelCityCard />
        </div>
      </div>
    </>
  );
};

export default Page;
