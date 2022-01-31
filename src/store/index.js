import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlicer";
import itemsReducer from "../features/items/itemsSlicer";

export default configureStore({
  reducer: {
    basket: basketReducer,
    items: itemsReducer,
  },
});
