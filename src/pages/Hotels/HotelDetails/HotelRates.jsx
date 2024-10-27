import { HotelSearchContext } from "@/components/context/HotelSearch";
import React, { useContext, useState, useEffect } from "react";
import { addhotelRoom } from "@/store/hotelRoomSlice";
import { useDispatch } from "react-redux";

const HotelRates = () => {
  const {
    checkInDate,
    checkOutDate,
    city,
    occupancy,
    guestNationality,
    hotelIds,
  } = useContext(HotelSearchContext);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const occupancies = occupancy ? occupancy : [{ adults: 2, children: [1] }];

  const dispatch = useDispatch();

  // Fetch data function
  const fetchData = async () => {
    if (isFetchingData) return;
    setIsFetchingData(true);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify({
        hotelIds: hotelIds.id ? [hotelIds.id] : ["lp1b578"],
        occupancies: occupancies,
        currency: "USD",
        guestNationality: guestNationality || "US",
        checkin: checkInDate,
        checkout: checkOutDate,
        countryCode: guestNationality ? guestNationality : "US", // Default to US if not available
        cityName: city || "New York", // Default to New York if not available
      }),
    };

    try {
      const response = await fetch(
        "https://api.liteapi.travel/v3.0/hotels/rates",
        options
      );
      const data = await response.json();

      if (data && data.data) {
        dispatch(addhotelRoom(data.data)); // Dispatch action if data is available
        console.log(data.data);
      } else {
        dispatch(
          addhotelRoom({
            error: {
              code: 2001,
              message: "No availability found",
            },
          })
        );
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsFetchingData(false); // Reset fetching state
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData on component mount or when dependencies change
  }, [hotelIds]);
};

export default HotelRates;
