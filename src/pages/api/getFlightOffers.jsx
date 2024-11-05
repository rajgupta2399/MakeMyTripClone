// pages/api/getFlightOffers.js
import Amadeus from "amadeus";

const amadeus = new Amadeus({
  clientId: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Use query parameters from the request to allow dynamic search criteria
      const { origin, destination, departureDate, adults } = req.query;

      const response = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate,
        adults,
      });

      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching flight offers:", error);
      res.status(500).json({ error: "Failed to fetch flight offers" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
