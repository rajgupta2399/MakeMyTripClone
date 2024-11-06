import { useEffect, useState } from "react";

// Mapping carrier codes to airline names
const airlineNames = {
  EY: "Etihad Airways", // Abu Dhabi's primary carrier
  AI: "Air India",
  BA: "British Airways",
  // Add more codes as needed
};

export default function Flights() {
  const [flightOffers, setFlightOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlightOffers() {
      try {
        const response = await fetch(
          `/api/getFlightOffers?origin=DEL&destination=LON&departureDate=2024-11-19&adults=2`
        );
        const data = await response.json();
        setFlightOffers(data);
        console.log(flightOffers);
      } catch (error) {
        console.error("Error fetching flight offers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFlightOffers();
  }, []);

  return (
    <div className="mt-24">
      <h1>Flight Offers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {flightOffers.map((offer, index) => (
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
