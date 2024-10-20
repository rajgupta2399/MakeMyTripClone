import React from "react";
import bestBookingImage from "../../../../public/Assets/best-booking.png";
import PlaneImage from "../../../../public/Assets/flight.png";
import Image from "next/image";
import Layout from "../Layout/Layout";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";

const FlightLanding = () => {
  return (
    <>
      <div>
        <Layout>
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex gap-2 border-2 justify-center align-middle border-yellow-400 w-[300px] py-2.5 rounded-full">
              <Image src={bestBookingImage} />
              <span>Best Flight Booking System</span>
            </div>
          </div>
          <div className="heading">
            <h1 className=" text-5xl font-semibold capitalize mt-3">
              Kickstart Your Travel Journey
            </h1>
          </div>
          {/* <GlobeDemo /> */}
          <AppleCardsCarouselDemo />
        </Layout>
      </div>
    </>
  );
};

export default FlightLanding;
