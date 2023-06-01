import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "showAll",
};

const followSlice = createSlice({
  name: "following",
  initialState,
  reducers: {
    addToFollowing: (state, { payload }) => {
      state.items = [...state.items, payload];
    },

    removeFromFollowing: (state, { payload }) => {
      state.items = state.items.filter((item) => item !== payload);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addToFollowing, removeFromFollowing, changeFilter } =
  followSlice.actions;

export default followSlice.reducer;
