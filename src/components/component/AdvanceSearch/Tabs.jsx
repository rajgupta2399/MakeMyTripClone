"use client";

import Image from "next/image";
import { Tabs } from "../../ui/tabs";
import PlaneImage from "../../../../public/Assets/plane.png";
import HotelImage from "../../../../public/Assets/hotel.png";
import TrainImage from "../../../../public/Assets/train2.png";
import HomeImage from "../../../../public/Assets/homestay.png";
import BeachImage from "../../../../public/Assets/beach.png";
import AdvanceSearchFlight from "./AdvanceSearchFlight";
import AdvanceSearchHotel from "./AdvanceSearchHotel";
import AdvanceSearchHome from "./AdvanceSearchHome";
import AdvanceSearchDest from "./AdvanceSearchDest";
import AdvanceSearchTrain from "./AdvanceSearchTrain";

export function TabsDemo() {
  const tabs = [
    {
      title: (
        <Image
          src={PlaneImage}
          className=" sm:w-[28px] sm:h-[28px] w-[120px] "
          alt="PlaneImage"
        ></Image>
      ),
      value: "Flights",
      content: (
        <div className="overflow-hidden relative mb-0 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <AdvanceSearchFlight />
        </div>
      ),
    },
    {
      title: (
        <Image
          src={HotelImage}
          className=" sm:w-[28px] sm:h-[28px] w-[120px]"
          alt="HotelImage"
        ></Image>
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative mb-0 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <AdvanceSearchHotel />
        </div>
      ),
    },
    {
      title: (
        <Image
          src={HomeImage}
          className=" sm:w-[28px] sm:h-[28px] w-[120px]"
          alt="HomeImage"
        ></Image>
      ),
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative mb-0 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <AdvanceSearchHome />
        </div>
      ),
    },
    {
      title: (
        <Image
          src={BeachImage}
          className=" sm:w-[28px] sm:h-[28px] w-[120px]"
          alt="BeachImage"
        ></Image>
      ),
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative mb-0 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <AdvanceSearchDest />
        </div>
      ),
    },
    {
      title: (
        <Image
          src={TrainImage}
          className=" sm:w-[28px] sm:h-[28px] w-[120px]"
          alt="TrainImage"
        ></Image>
      ),
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative mb-0 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <AdvanceSearchTrain />
        </div>
      ),
    },
  ];

  return (
    <div className="sm:h-[20rem] md:h-[20rem] [perspective:1000px] relative b flex flex-col justify-center items-center align-middle max-w-5xl mx-auto w-full -mt-14 sm:mb-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <Image
//       src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=2048&q=75"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[120%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto mt-0"
//     />
//   );
// };
