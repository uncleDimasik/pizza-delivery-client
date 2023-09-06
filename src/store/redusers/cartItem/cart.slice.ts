import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItemEnum, ExtendedCardItem } from './types';

const CART = 'CART';
// TODO: Normalize data (do not use filters)
const initialState: Cart = localStorage.getItem(CART)
  ? JSON.parse(localStorage.getItem(CART) as string)
  : {
      cartItems: [],
      totalPrice: 0,
    };
// {
//   customerDish: undefined,
//   goodId: undefined,
//   type: undefined,
//   quantity: 1,
//   price: 0,
// };

export const cartSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    clearCart(state: Cart) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.setItem(CART, JSON.stringify(initialState));
    },
    addToCart(state: Cart, action: PayloadAction<ExtendedCardItem>) {
      let cardItem: ExtendedCardItem | undefined;
      if (action.payload.type === CartItemEnum.good) {
        cardItem = state.cartItems.find(
          (item) => item.goodId === action.payload.goodId,
        );
      } else {
        cardItem = state.cartItems.find(
          (item) =>
            item.customerDish?.parentDishId ===
            action.payload.customerDish?.parentDishId,
        );
      }
      if (cardItem) {
        cardItem.quantity += 1;
        state.totalPrice -= cardItem.totalPrice;
        cardItem.totalPrice = cardItem.quantity * cardItem.price;
        state.totalPrice += cardItem.totalPrice;
        localStorage.setItem(CART, JSON.stringify(state));
        return;
      }
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price;
      localStorage.setItem(CART, JSON.stringify(state));
    },
    deleteGoodById(state: Cart, action: PayloadAction<string>) {
      const cartItem = state.cartItems.findIndex(
        (cartItem) => cartItem.goodId === action.payload,
      );
      state.totalPrice -= state.cartItems[cartItem].totalPrice;
      state.cartItems.splice(cartItem, 1);
      localStorage.setItem(CART, JSON.stringify(state));
    },
    deleteDishById(state: Cart, action: PayloadAction<string>) {
      const cartItem = state.cartItems.findIndex(
        (cartItem) =>
          cartItem.customerDish?.parentDishId === action.payload,
      );
      state.totalPrice -= state.cartItems[cartItem].totalPrice;
      state.cartItems.splice(cartItem, 1);
      localStorage.setItem(CART, JSON.stringify(state));
    },
    changeDishQuantityById(
      state: Cart,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const cardItem = state.cartItems.find(
        (item) =>
          item.customerDish?.parentDishId === action.payload.id,
      );
      if (cardItem) {
        if (
          action.payload.quantity >= 10 ||
          action.payload.quantity < 1
        ) {
          return;
        }
        cardItem.quantity = action.payload.quantity;
        state.totalPrice -= cardItem.totalPrice;
        cardItem.totalPrice = cardItem.quantity * cardItem.price;
        state.totalPrice += cardItem.totalPrice;
        localStorage.setItem(CART, JSON.stringify(state));
      }
    },
    changeGoodQuantityById(
      state: Cart,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const cardItem = state.cartItems.find(
        (item) => item.goodId === action.payload.id,
      );
      if (cardItem) {
        if (
          action.payload.quantity >= 10 ||
          action.payload.quantity < 1
        ) {
          return;
        }
        cardItem.quantity = action.payload.quantity;
        state.totalPrice -= cardItem.totalPrice;
        cardItem.totalPrice = cardItem.quantity * cardItem.price;
        state.totalPrice += cardItem.totalPrice;
        localStorage.setItem(CART, JSON.stringify(state));
      }
    },

    // increaseDishQuantityById(
    //   state: Cart,
    //   action: PayloadAction<string>,
    // ) {
    //   const cardItem = state.cartItems.find(
    //     (item) => item.customerDish?.parentDishId === action.payload,
    //   );
    //   if (cardItem) {
    //     if (cardItem.quantity >= 10) {
    //       return;
    //     }
    //     cardItem.quantity += 1;
    //     state.totalPrice += cardItem.price;
    //     localStorage.setItem(CART, JSON.stringify(state));
    //     return;
    //   }
    // },
    // decreaseDishQuantityById(
    //   state: Cart,
    //   action: PayloadAction<string>,
    // ) {
    //   const cardItem = state.cartItems.find(
    //     (item) => item.customerDish?.parentDishId === action.payload,
    //   );
    //   if (cardItem) {
    //     if (cardItem.quantity <= 1) {
    //       return;
    //     }
    //     cardItem.quantity -= 1;
    //     state.totalPrice -= cardItem.price;
    //     localStorage.setItem(CART, JSON.stringify(state));
    //     return;
    //   }
    // },
    // increaseGoodQuantityById(
    //   state: Cart,
    //   action: PayloadAction<string>,
    // ) {
    //   const cardItem = state.cartItems.find(
    //     (item) => item.goodId === action.payload,
    //   );
    //   if (cardItem) {
    //     if (cardItem.quantity >= 10) {
    //       return;
    //     }
    //     cardItem.quantity += 1;
    //     state.totalPrice += cardItem.price;
    //     localStorage.setItem(CART, JSON.stringify(state));
    //     return;
    //   }
    // },
    // decreaseGoodQuantityById(
    //   state: Cart,
    //   action: PayloadAction<string>,
    // ) {
    //   const cardItem = state.cartItems.find(
    //     (item) => item.goodId === action.payload,
    //   );
    //   if (cardItem) {
    //     if (cardItem.quantity <= 1) {
    //       return;
    //     }
    //     cardItem.quantity -= 1;
    //     state.totalPrice -= cardItem.price;
    //     localStorage.setItem(CART, JSON.stringify(state));
    //     return;
    //   }
    // },
  },
});

export default cartSlice.reducer;
