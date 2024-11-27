import { createContext, useState } from "react";

export const DepartureAirportContext = createContext();

// Create a provider component
export const DepartureAirportProvider = ({ children }) => {
  const [departureAirportData, setDepartureAirportData] = useState({
    code: "AAQ",
    countryCode: "RU",
    latitude: 45.0021,
    longitude: 37.3473,
    name: "Anapa Airport",
  });

  return (
    <DepartureAirportContext.Provider
      value={{ departureAirportData, setDepartureAirportData }}
    >
      {children}
    </DepartureAirportContext.Provider>
  );
};
