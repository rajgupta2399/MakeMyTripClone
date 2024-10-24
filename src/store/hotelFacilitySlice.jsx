import { createSlice } from "@reduxjs/toolkit";

const hotelFacilitySlice = createSlice({
    name: "hotelFacility",
    initialState: {
        hotelFacility: null,
    },
    reducers: {
        addHotelFacility: (state, action) => {
            state.hotelFacility = action.payload;

        },
    },
});

export const { addHotelFacility } = hotelFacilitySlice.actions;
export default hotelFacilitySlice.reducer;
