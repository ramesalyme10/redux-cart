import { createSlice } from "@reduxjs/toolkit";

const carts = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  carts: carts ? carts : [],
  loading: false,
  error: false,
  success: false,
  message: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productsExist = state.carts?.findIndex(
        (cart) => cart._id === action.payload._id
      );
      if (productsExist >= 0) {
        state.carts[productsExist].qty += 1;
      } else {
        const items = { ...action.payload, qty: 1 };
        state.carts?.push(items);
      }
      localStorage.setItem("cart", JSON.stringify(state.carts));
    },

    deleteItems: (state, action) => {
       const removeProducts = state.carts?.filter((cart) => cart._id !== action.payload._id)
       state.carts = removeProducts
       localStorage.setItem("cart", JSON.stringify(state.carts));
    },

    decrementItems: (state, action) => {
      const exist = state.carts?.findIndex(
        (cart) => cart._id === action.payload._id
      );
      if (state.carts[exist].qty >= 0) {
        state.carts[exist].qty += 1;
      }
    },
    IncrementItems: (state, action) => {
      const exist = state.carts?.findIndex(
        (cart) => cart._id === action.payload._id
      );
      if (state.carts[exist].qty >= 1) {
        state.carts[exist].qty -= 1;
      }else {
        const removeProducts = state.carts?.filter((cart) => cart._id !== action.payload._id)
       state.carts = removeProducts
       localStorage.setItem("cart", JSON.stringify(state.carts));
      }
    },


    RemoveAllProducts:(state) => {
        state.carts = []
        localStorage.setItem("cart", JSON.stringify(state.carts));
     }


  },

 
});

export const { addToCart, decrementItems, IncrementItems, deleteItems,RemoveAllProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
