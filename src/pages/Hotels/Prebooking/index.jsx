import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PreBookHotelRoomCard from "./PreBookHotelRoomCard";
import Image from "next/image";

const PreBookHotelRoom = () => {
  const hotelRoom = useSelector((store) => store.hotelRoom.hotelRoom);
  const [item, setItem] = useState(null);
  const [matchedRoom, setMatchedRoom] = useState(null);

  // Retrieve item from sessionStorage when the component mounts
  useEffect(() => {
    const storedItem = sessionStorage.getItem("selectedItem");
    if (storedItem) {
      try {
        setItem(JSON.parse(storedItem));
      } catch (error) {
        console.error("Failed to parse stored item:", error);
        setItem(null); // Reset item on error
      }
    }
  }, []);

  const roomNameWords = item?.roomName?.toLowerCase().split(" ");

  useEffect(() => {
    if (hotelRoom && hotelRoom.length > 0 && roomNameWords) {
      const foundRoom = hotelRoom[0]?.roomTypes?.find((roomType) =>
        roomNameWords.some((word) =>
          roomType?.rates?.[0]?.name?.toLowerCase().includes(word)
        )
      );
      setMatchedRoom(foundRoom || null);
    }
  }, [hotelRoom, roomNameWords]);

  const availableRooms = hotelRoom && hotelRoom[0]?.roomTypes.length > 0;

  return (
    <div>
      {matchedRoom ? (
        // Display when a matching room is found
        <div className="text-center my-5 px-2">
          <h5 className="text-white text-md pb-3 font-bold">
            Book Your {item?.roomName}
          </h5>
          <div className="image w-full flex justify-center px-2">
            <div className="w-full md:w-[50%] lg:w-[22%] border-2 py-3 rounded-lg">
              {item?.photos?.[0]?.url ||
              item?.photos?.[1]?.url ||
              item?.photos?.[2]?.url ? (
                <Image
                  src={
                    item?.photos?.[0]?.url ||
                    item?.photos?.[1]?.url ||
                    item?.photos?.[2]?.url
                  }
                  alt="Hotel Room"
                  className="mx-auto w-[90%] h-[200px] md:h-[250px] object-cover rounded-lg"
                  height={200}
                  width={200}
                  unoptimized
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        // Display message if no matching room is found
        <div className="text-center my-5">
          <h5 className="text-red-500 text-md pb-3 font-bold">
            Sorry, no rooms match "{item?.roomName}".
          </h5>
        </div>
      )}

      {availableRooms ? (
        <div className="hotelRoomsdiv">
          <div className="rooms px-10 sm:px-20 md:px-24 lg:px-24 flex flex-wrap gap-5 justify-center mb-5">
            {/* Use a Set to get unique room names */}
            {Array.from(
              new Set(
                hotelRoom[0]?.roomTypes
                  .filter((roomType) =>
                    roomNameWords?.some((word) =>
                      roomType?.rates?.[0]?.name?.toLowerCase().includes(word)
                    )
                  )
                  .map((roomType) => roomType.rates[0]?.name?.toLowerCase())
              )
            ).map((uniqueRoomName) => {
              const filteredRoom = hotelRoom[0]?.roomTypes.find(
                (roomType) =>
                  roomType.rates[0]?.name?.toLowerCase() === uniqueRoomName
              );
              return (
                <div
                  key={filteredRoom.roomTypeId}
                  className="w-full sm:w-[45%] md:w-[30%] lg:w-[30%]"
                >
                  <PreBookHotelRoomCard
                    filteredRoom={filteredRoom}
                    item={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Display "No rooms available" message when no rooms are available
        <div className="text-center my-10">
          <h5 className="text-red-500 text-lg font-bold my-5">
            No rooms available.
          </h5>
        </div>
      )}
    </div>
  );
};

export default PreBookHotelRoom;
