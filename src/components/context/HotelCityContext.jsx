import React, { createContext, useState } from "react";

// Create a Context for Country
export const HotelCityContext = createContext();

// Create a provider component
export const HotelCityProvider = ({ children }) => {

    const [hotelCityData, setHotelCityData] = useState({ city: "New Delhi" });

    return (
        <HotelCityContext.Provider value={{ hotelCityData, setHotelCityData }}>
            {children}
        </HotelCityContext.Provider>
    );
};
