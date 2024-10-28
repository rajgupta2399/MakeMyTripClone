import { createSlice } from "@reduxjs/toolkit";

const hotelWatchlistSlice = createSlice({
  name: "hotelWatchlist",
  initialState: {
    hotelWatchlist: [],
  },
  reducers: {
    addhotelWatchlist: (state, action) => {
      state.hotelWatchlist.push(action.payload);
    },
  },
});

export const { addhotelWatchlist } = hotelWatchlistSlice.actions;
export default hotelWatchlistSlice.reducer;
