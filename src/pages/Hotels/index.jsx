import TransitionEffect from "@/components/component/Animation/TransitionEffect ";
import { BackgroundLinesDemo } from "@/components/component/Footer/BackgroundLinesDemo";
import { ThreeDCardDemo } from "@/components/component/Other/ThreeDCardDemo";
import Head from "next/head";
import React, { useContext } from "react";
import { CountryContext } from "@/components/context/CountryContext";
import useCountryCodeHotel from "@/components/hooks/useCountryCodeHotel";

const Page = () => {
  useCountryCodeHotel()
  const { countryData, setCountryData } = useContext(CountryContext)

  // console.log(countryData.code);

  return (
    <>
      <Head>
        <title>MMT | Hotels Booking</title>
        <meta name="description" content="any-description" />
      </Head>
      <TransitionEffect />
      <div>
        <BackgroundLinesDemo />
      </div>
    </>

  );
};

export default Page;
