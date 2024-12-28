import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const selectFavorites = (state) => state.products.favorites;
export const selectCart = (state) => state.products.cart;

export const selectInCart = (state, productId) =>
  state.products.cart.some((item) => item.id === productId);
export const selectInFavorites = (state, productId) =>
  state.products.favorites.some((item) => item.id === productId);

export const selectCartStatus = (productId) => (state) =>
  selectInCart(state, productId);
export const selectFavoritesStatus = (productId) => (state) =>
  selectInFavorites(state, productId);

export const {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} = productSlice.actions;

export default productSlice.reducer;
