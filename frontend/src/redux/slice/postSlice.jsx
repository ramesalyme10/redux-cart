import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../features/productServices";

const tasks = JSON.parse(localStorage.getItem("items"));

const initialState = {
  tasks: tasks ? tasks : null,
  loading: false,
  success: false,
  message: "",
  error: false,
};

export const taskProductSlice = createAsyncThunk(
  "task/products",
  async (task,thunkAPI) => {
    try {
      return productService.taskProductSlice(task);
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

export const postSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.tasks = null;
    },
  },
  extraReducers: (builder) => {
    builder .addCase(taskProductSlice.pending, (state) =>{
         state.loading = true
    })
            .addCase(taskProductSlice.fulfilled,(state,action) =>{
                state.loading = false
                state.success = true
                state.tasks = action.payload
            })
            .addCase(taskProductSlice.rejected, (state,action) =>{
                state.error = true
                state.message = action.payload
                state.tasks = null
                state.loading = false;
            })
  },
});

export const { reset } = postSlice.actions;

export default postSlice.reducer;