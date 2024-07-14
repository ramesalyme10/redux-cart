import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../features/productServices";

const products = JSON.parse(localStorage.getItem("posts"));

const initialState = {
  products: products ? products : null,
  loading: false,
  success: false,
  message: "",
  error: false,
};

export const getProductSlice = createAsyncThunk(
  "get/products",
  async (thunkAPI) => {
    try {
      return productService.getProductSlice();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
  }
);

export const getSlice = createSlice({
  name: "get",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder .addCase(getProductSlice.pending, (state) =>{
         state.loading = true
    })
            .addCase(getProductSlice.fulfilled,(state,action) =>{
                state.loading = false
                state.success = true
                state.products = action.payload
            })
            .addCase(getProductSlice.rejected, (state,action) =>{
                state.error = true
                state.message = action.payload
                state.products = null
                state.loading = false;
            })
  },
});

export const { reset } = getSlice.actions;

export default getSlice.reducer;
