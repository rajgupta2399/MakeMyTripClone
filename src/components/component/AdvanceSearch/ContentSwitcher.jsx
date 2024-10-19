"use client";
import { useState } from "react";
import Image from "next/image"; // Import Image from Next.js
import PlaneImage from "../../../../public/Assets/plane.png";
import HotelImage from "../../../../public/Assets/hotel.png";
import TrainImage from "../../../../public/Assets/train2.png";
import HomeImage from "../../../../public/Assets/homestay.png";
import AdvanceSearch from "./AdvanceSearch"; // Import AdvanceSearch
import AdvanceSearchFlight from "./AdvanceSearchFlight";

const ContentSwitcher = () => {
  const [selectedContent, setSelectedContent] = useState("hotels");

  const contentMap = {
    flights: <>{}</>,
    trains: <></>,
    hotels: <></>,
    homestays: <></>,
  };

  const buttonData = [
    { id: "hotels", label: "Hotels", icon: HotelImage },
    { id: "trains", label: "Trains", icon: TrainImage },
    { id: "flights", label: "Flights", icon: PlaneImage },
    { id: "homestays", label: "Homestays", icon: HomeImage },
  ];

  return (
    <div className="relative">
      <div className="rounded-lg sm:relative z-[1000]">
        <div className="flex space-x-4 mb-0 justify-center items-center gap-6 py-4 mx-48 rounded-xl shadow-xl">
          {buttonData.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setSelectedContent(id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-300 w-[90px]
              ${
                selectedContent === id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              } 
              hover:bg-blue-500 hover:text-white`}
            >
              <Image src={icon} alt={label} width={28} height={28} />
              <span className="mt-2">{label}</span>{" "}
            </button>
          ))}
        </div>
        <div className="content-area">{contentMap[selectedContent]}</div>
      </div>
    </div>
  );
};

export default ContentSwitcher;
