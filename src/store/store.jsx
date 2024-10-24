const { configureStore } = require("@reduxjs/toolkit");
import countryHotelReducer from "./countryHotelSlice";
import hotelFacilityReducer from "./hotelFacilitySlice";
import cityHotelReducer from "./cityHotelSlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
    hotelFacility: hotelFacilityReducer,
    cityHotel: cityHotelReducer,
  },
});

export default store;
