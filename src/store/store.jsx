const { configureStore } = require("@reduxjs/toolkit");
import countryHotelReducer from "./countryHotelSlice"
import hotelFacilityReducer from "./hotelFacilitySlice"

const store = configureStore({
    reducer: {
        country: countryHotelReducer,
        hotelFacility: hotelFacilityReducer,
    }
})

export default store;