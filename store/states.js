import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburgerMenu: false,
  payProcess: false,
  order: false,
  customer: {
    name: "",
    address: "",
    kpay: "",
  },
  itemId: 0,
  size: 0,
  quantity: 1,
  finalPrice: 0,
  charges: { delivery: 500, tax: 500 },
  cartItems: [],
};
export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    sizeSmall(state) {
      state.size = 0;
    },
    sizeMedium(state) {
      state.size = 1;
    },
    sizeLarge(state) {
      state.size = 2;
    },
    increseQuantity(state) {
      state.quantity++;
    },
    decreseQuantity(state) {
      state.quantity === 1 ? null : state.quantity--;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.cartItems.find(
        (item) =>
          item.name === newItem.name && item.size === newItem.sizeChecking
      );

      if (existingItems) {
        existingItems.total += newItem.price[state.size] * newItem.quantity;
        existingItems.quantity += newItem.quantity;
      } else {
        state.cartItems.push({
          id: state.itemId++,
          name: newItem.name,
          slug: newItem.slug,
          price: newItem.price[state.size],
          image: newItem.img,
          quantity: newItem.quantity,
          size: newItem.sizeChecking,
          total: newItem.price[state.size] * newItem.quantity,
        });
      }
    },
    removeFromCart(state, action) {
      const newItem = action.payload;
      const RemoveItem = state.cartItems.filter(
        (item) => item.id !== newItem.id
      );
      state.cartItems = RemoveItem;
    },
    payNow(state) {
      state.payProcess = true;
    },
    payNowPayment(state) {
      state.payProcess = false;
      state.cartItems = [];
    },
    closePayNow(state) {
      state.payProcess = false;
    },
    returnOriginal(state) {
      state.quantity = 1;
      state.size = 0;
    },
    hamburgerMenuClick(state) {
      state.hamburgerMenu = !state.hamburgerMenu;
    },
    hamburgerMenuCloseClickSpace(state) {
      state.hamburgerMenu = false;
    },
    orderSuccess(state) {
      state.order = true;
    },
    orderReturn(state) {
      state.order = false;
    },
  },
});

export const action = shopSlice.actions;
