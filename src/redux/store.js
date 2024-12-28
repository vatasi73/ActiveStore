import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import itemsReducer from "./FetchProductSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    items: itemsReducer,
  },
});

export default store;
