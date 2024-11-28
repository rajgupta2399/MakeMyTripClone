import { ArrivalAirportContext } from "@/components/context/ArrivalAirportContex";
import { DepartureAirportContext } from "@/components/context/DepartureAirportContext";
import { useContext, useEffect, useState } from "react";

// Mapping carrier codes to airline names
const airlineNames = {
  EY: "Etihad Airways", // Abu Dhabi's primary carrier
  AI: "Air India",
  BA: "British Airways",
  // Add more codes as needed
};

export default function Flights() {
  const { departureAirportData } = useContext(DepartureAirportContext);
  const { arrivalAirportData } = useContext(ArrivalAirportContext);
  const [flightOffers, setFlightOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlightOffers() {
      try {
        const response = await fetch(
          `/api/getFlightOffers?origin=${departureAirportData.code}&destination=${arrivalAirportData.code}&departureDate=2024-11-28&adults=2`
        );
        const data = await response.json();
        setFlightOffers(data);
      } catch (error) {
        console.error("Error fetching flight offers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFlightOffers();
  }, [departureAirportData, arrivalAirportData]);

  console.log(flightOffers);
  console.log(departureAirportData);
  console.log(arrivalAirportData);
  

  return (
    <div className="mt-24">
      <h1>Flight Offers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {flightOffers?.map((offer, index) => (
            <li key={index}>
              <p>
                Price: {offer.price.total} {offer.price.currency}
              </p>
              <p>
                Departure: {offer.itineraries[0].segments[0].departure.iataCode}
              </p>
              <p>
                Arrival: {offer.itineraries[0].segments[0].arrival.iataCode}
              </p>
              <p>Duration: {offer.itineraries[0].duration}</p>
              {/* Get the carrier code and display the airline name if available */}
              <p>
                Airline:{" "}
                {airlineNames[offer.itineraries[0].segments[0].carrierCode] ||
                  offer.itineraries[0].segments[0].carrierCode}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
