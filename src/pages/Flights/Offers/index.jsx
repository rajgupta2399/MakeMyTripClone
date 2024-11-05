// pages/flights.js
import { useEffect, useState } from "react";

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
    <div>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
