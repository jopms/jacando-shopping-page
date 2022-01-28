import { createSlice } from "@reduxjs/toolkit";

export const basketSlicer = createSlice({
  name: "basket",

  initialState: {
    value: [],
  },

  reducers: {
    updateGlobalBasket: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateGlobalBasket } = basketSlicer.actions;

export default basketSlicer.reducer;
