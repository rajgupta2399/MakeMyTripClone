const { configureStore } = require("@reduxjs/toolkit");
import countryHotelReducer from "./countryHotelSlice"

const store = configureStore({
    reducer: {
        country: countryHotelReducer,
    }
})

export default store;