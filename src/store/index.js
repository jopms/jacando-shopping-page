import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlicer";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
