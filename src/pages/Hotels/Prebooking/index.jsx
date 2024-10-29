import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router"; // Import useRouter for Next.js
import PreBookHotelRoomCard from "./PreBookHotelRoomCard";

const PreBookHotelRoom = () => {
  const router = useRouter();
  const { item: itemQuery } = router.query;
  const hotelRoom = useSelector((store) => store.hotelRoom.hotelRoom);

  // Parse the item from the query parameter
  const [item, setItem] = useState(null);
  const [matchedRoom, setMatchedRoom] = useState(null);

  useEffect(() => {
    if (itemQuery) {
      try {
        setItem(JSON.parse(itemQuery));
      } catch (error) {
        console.error("Failed to parse item:", error);
      }
    }
  }, [itemQuery]);

  // Extract roomName words only when item is available
  const roomNameWords = item?.roomName?.toLowerCase().split(" ");

  useEffect(() => {
    if (hotelRoom && hotelRoom.length > 0 && roomNameWords) {
      const foundRoom = hotelRoom[0]?.roomTypes?.find((roomType) =>
        roomNameWords.some((word) =>
          roomType?.rates?.[0]?.name?.toLowerCase().includes(word)
        )
      );
      setMatchedRoom(foundRoom);
    }
  }, [hotelRoom, roomNameWords]);

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
                <img
                  src={
                    item?.photos?.[0]?.url ||
                    item?.photos?.[1]?.url ||
                    item?.photos?.[2]?.url
                  }
                  alt="Hotel Room"
                  className="mx-auto w-[90%] h-[200px] md:h-[250px] object-cover rounded-lg"
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

      <div className="hotelRoomsdiv">
        {hotelRoom && hotelRoom[0]?.roomTypes.length > 0 ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default PreBookHotelRoom;
