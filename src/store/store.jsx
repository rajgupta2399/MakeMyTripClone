const { configureStore } = require("@reduxjs/toolkit");
import countryHotelReducer from "./countryHotelSlice";
import hotelFacilityReducer from "./hotelFacilitySlice";
import cityHotelReducer from "./cityHotelSlice";
import hotelDetailReducer from "./hotelDetailSlice";
import hotelReviewReducer from "./hotelReviewSlice";
import hotelRoomReducer from "./hotelRoomSlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
    hotelFacility: hotelFacilityReducer,
    cityHotel: cityHotelReducer,
    hotelDetail: hotelDetailReducer,
    hotelReview: hotelReviewReducer,
    hotelRoom: hotelRoomReducer,
  },
});

export default store;
