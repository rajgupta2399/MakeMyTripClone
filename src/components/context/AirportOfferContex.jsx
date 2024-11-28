import { createContext, useState } from "react";

export const AirportOfferContext = createContext();

export const AirportOfferProvider = ({ children }) => {
  const [departureCountry, setDepartureCountry] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCountry, setArrivalCountry] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [travelAdult, setTravelAdult] = useState("");
  const [travelChildren, setTravelChildren] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelClass, setTravelClass] = useState("");

  return (
    <AirportOfferContext.Provider
      value={{
        departureCountry,
        setDepartureCountry,
        departureCity,
        setDepartureCity,
        arrivalCountry,
        setArrivalCountry,
        arrivalCity,
        setArrivalCity,
        travelAdult,
        setTravelAdult,
        travelChildren,
        setTravelChildren,
        departureDate,
        setDepartureDate,
        travelClass,
        setTravelClass,
      }}
    >
      {children}
    </AirportOfferContext.Provider>
  );
};
