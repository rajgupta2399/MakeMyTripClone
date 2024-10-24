import React, { createContext, useState } from "react";

// Create a Context for Country
export const HotelDetailsId = createContext();

// Create a provider component
export const HotelDetailsIdProvider = ({ children }) => {
  const [hotelId, setHotelId] = useState({ id: "lp19d5a" });

  return (
    <HotelDetailsId.Provider value={{ hotelId, setHotelId }}>
      {children}
    </HotelDetailsId.Provider>
  );
};
