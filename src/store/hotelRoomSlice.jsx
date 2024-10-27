import { createSlice } from "@reduxjs/toolkit";

const hotelRoomSlice = createSlice({
  name: "hotelRoom",
  initialState: {
    hotelRoom: null,
  },
  reducers: {
    addhotelRoom: (state, action) => {
      state.hotelRoom = action.payload;
    },
  },
});

export const { addhotelRoom } = hotelRoomSlice.actions;
export default hotelRoomSlice.reducer;
