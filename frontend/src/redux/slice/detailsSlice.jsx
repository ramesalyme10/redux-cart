import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../features/productServices";

const product = JSON.parse(localStorage.getItem("post"));

const initialState = {
  product: product ? product : null,
  loading: false,
  success: false,
  message: "",
  error: false,
};

export const detailsProductSlice = createAsyncThunk(
  "details/products",
  async (id,thunkAPI) => {
    try {
      return productService.detailsProductSlice(id);
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

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.product = [];
    },
  },
  extraReducers: (builder) => {
    builder .addCase(detailsProductSlice.pending, (state) =>{
         state.loading = true
    })
            .addCase(detailsProductSlice.fulfilled,(state,action) =>{
                state.loading = false
                state.success = true
                state.product = action.payload
            })
            .addCase(detailsProductSlice.rejected, (state,action) =>{
                state.error = true
                state.message = action.payload
                state.product = null
                state.loading = false;
            })
  },
});

export const { reset } = detailsSlice.actions;

export default detailsSlice.reducer;