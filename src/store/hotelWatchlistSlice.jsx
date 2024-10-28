import { createSlice } from "@reduxjs/toolkit";

const loadWishListFromLocalStorage = () => {
  if (typeof window !== "undefined") { // Check if window is available
    const storedWishList = localStorage.getItem("wishList");
    return storedWishList ? JSON.parse(storedWishList) : [];
  }
  return []; // Return an empty array if localStorage is not available
};

const hotelWatchlistSlice = createSlice({
  name: "hotelWatchlist",
  initialState: {
    hotelWatchlist: loadWishListFromLocalStorage(),
  },
  reducers: {
    addhotelWatchlist: (state, action) => {
      const itemExists = state.hotelWatchlist.find(
        (item) => item.id === action.payload.id
      ); // Check for duplicates

      if (!itemExists) {
        state.hotelWatchlist.push(action.payload); // Only add if it doesn't exist
        localStorage.setItem("wishList", JSON.stringify(state.hotelWatchlist)); // Update local storage
      }
    },
  },
});

export const { addhotelWatchlist } = hotelWatchlistSlice.actions;
export default hotelWatchlistSlice.reducer;
