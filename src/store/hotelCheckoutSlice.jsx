import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutInfo:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("checkoutInfo")) || []
      : [],
};

const hotelCheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckoutDetails: (state, action) => {
      state.checkoutInfo.push(action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "checkoutInfo",
          JSON.stringify(state.checkoutInfo)
        );
      }
    },
  },
});

export const { addCheckoutDetails } = hotelCheckoutSlice.actions;
export default hotelCheckoutSlice.reducer;
