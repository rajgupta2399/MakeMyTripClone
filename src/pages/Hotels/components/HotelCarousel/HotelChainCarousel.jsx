import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useContext } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import NewSkeleton from "./NewSkeleton";
import { useSelector } from "react-redux";
import Link from "next/link";
import HotelCard from "../HotelCard/HotelCard";
import useCountryCodeHotel from "@/components/hooks/useCountryCodeHotel";
import { CountryContext } from "@/components/context/CountryContext";
import { Divider } from "@mui/material";

const HotelChainCarousel = () => {
  useCountryCodeHotel();
  const country = useSelector((store) => store.country.CountryHotelCode);
  const { countryData, setCountryData } = useContext(CountryContext);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial state based on window size
      setIsSmallScreen(window.innerWidth <= 550);

      // Define resize event handler
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 550);
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Run once on mount

  // console.log(country);

  // Check if country is null or not an array
  if (!country || !Array.isArray(country)) {
    return (
      <div className="mb-10 mt-0">
        <NewSkeleton />
      </div>
    );
  }

  return country.length === 0 ? (
    <div className=" mb-10 mt-0">
      <NewSkeleton />
    </div>
  ) : (
    <>
      <div className="sm:max-w-[1230px] mx-auto mt-1 small mb-10 w-full">
        <h1 className=" text-[17px] sm:pl-4 pl-4 font-semibold capitalize">
          Some Top Hotel In {countryData.name}
        </h1>
        <div className="">
          <Carousel
            className="border-none max-w-[1230px] w-full  "
            opts={{
              align: "start",
              loop: true,
              items: {
                visible: {
                  min: 1,
                  max: 1,
                },
              },
            }}
            plugins={[Autoplay({ delay: 10000 })]}
          >
            <CarouselContent className="py-4">
              {country.map((hotel, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 sm:basis-[1%] md:basis-[5%] lg:basis-[370px]"
                >
                  <Card className="cursor-pointer h-[386px] ml-5 rounded-xl flex justify-center bg-[#1D232A] border-none">
                    <Link
                      href={""}
                      // key={restaurant.info.id}
                    >
                      <HotelCard hotelData={hotel} key={hotel.info} />
                    </Link>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-700 text-white rounded-full cursor-pointer ml-2">
              &#x2039;
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-700 text-white rounded-full cursor-pointer ">
              &#x203A;
            </CarouselNext>
          </Carousel>
        </div>
        <Divider className=" border-b-4 mt-3 border-white" />
      </div>
    </>
  );
};

export default HotelChainCarousel;
