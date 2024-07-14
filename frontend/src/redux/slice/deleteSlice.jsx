import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../features/productServices";


const port = JSON.parse(localStorage.getItem("ports"));

const initialState = {
  port: port ? port : null,
  loading: false,
  success: false,
  message: "",
  error: false,
};

export const DeleteProductSlice = createAsyncThunk(
  "delete/products",
  async (id,thunkAPI) => {
    try {
      confirm("Are you Sure you want to Delete this Products?")
      return productService.DeleteProductSlice(id)
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

export const deleteSlice = createSlice({
  name: "del",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.port = [];
    },
  },
  extraReducers: (builder) => {
    builder .addCase(DeleteProductSlice.pending, (state) =>{
         state.loading = true
    })
            .addCase(DeleteProductSlice.fulfilled,(state,action) =>{
                state.loading = false
                state.success = true
                state.port = action.payload
            })
            .addCase(DeleteProductSlice.rejected, (state,action) =>{
                state.error = true
                state.message = action.payload
                state.port = null
                state.loading = false;
            })
  },
});

export const { reset } = deleteSlice.actions;

export default deleteSlice.reducer;