import { createSlice } from "@reduxjs/toolkit";

export const itemsSlicer = createSlice({
  name: "item",
  initialState: {
    value: [],
    triggerGetItems: false,
    triggerUpdateItems: false,
  },

  reducers: {
    updateItems: (state, action) => {
      state.value = action.payload;
    },

    setTriggerGetItems: (state, action) => {
      state.triggerGetItems = action.payload;
    },

    setTriggerUpdateItems: (state, action) => {
      state.triggerUpdateItems = action.payload;
    },
  },
});

export const { updateItems, setTriggerGetItems, setTriggerUpdateItems } =
  itemsSlicer.actions;

export default itemsSlicer.reducer;
