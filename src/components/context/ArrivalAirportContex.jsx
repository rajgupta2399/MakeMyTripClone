import { createContext, useState } from "react";

export const ArrivalAirportContext = createContext();

// Create a provider component
export const ArrivalAirportProvider = ({ children }) => {
  const [arrivalAirportData, setArrivalAirportData] = useState({
    code: "DEL",
    countryCode: "IN",
    latitude: 28.5665,
    longitude: 77.1031,
    name: "Indira Gandhi International Airport",
  });

  return (
    <ArrivalAirportContext.Provider
      value={{ arrivalAirportData, setArrivalAirportData }}
    >
      {children}
    </ArrivalAirportContext.Provider>
  );
};
