import React, { createContext, useState } from "react";

// Create a Context for Country
export const CountryContext = createContext();

// Create a provider component
export const CountryProvider = ({ children }) => {

    const [countryData, setCountryData] = useState({ name: "India", code: "IN" });

    return (
        <CountryContext.Provider value={{ countryData, setCountryData }}>
            {children}
        </CountryContext.Provider>
    );
};
