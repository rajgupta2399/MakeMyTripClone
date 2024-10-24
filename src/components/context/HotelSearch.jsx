import React, { createContext, useState } from "react";

// Create the HotelSearchContext
export const HotelSearchContext = createContext();

export const HotelSearchProvider = ({ children }) => {
  // Define the state variables for the context
  const [checkInDate, setCheckInDate] = useState(""); //
  const [checkOutDate, setCheckOutDate] = useState(""); //
  const [city, setCity] = useState(""); //
  const [occupancy, setOccupancy] = useState(""); //
  const [guestNationality, setGuestNationality] = useState(""); //
  const [currency, setCurrency] = useState("US"); //
  const [hotelIds, setHotelIds] = useState("lp19d5a"); //

  return (
    <HotelSearchContext.Provider
      value={{
        checkInDate,
        setCheckInDate,
        checkOutDate,
        setCheckOutDate,
        city,
        setCity,
        occupancy,
        setOccupancy,
        guestNationality,
        setGuestNationality,
        currency,
        setCurrency,
        hotelIds,
        setHotelIds,
      }}
    >
      {children}
    </HotelSearchContext.Provider>
  );
};
