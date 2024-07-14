import { configureStore } from "@reduxjs/toolkit";
import getReducer from './slice/getSlice'
import postReducer from "./slice/postSlice";
import deleteReducer from "./slice/deleteSlice";
import detailsReducer from "./slice/detailsSlice";
import cartReducer from './slice/addTocartSlice'

export const store = configureStore({
    reducer:{
        get:getReducer,
        create:postReducer,
        del:deleteReducer,
        details:detailsReducer,
        cart:cartReducer,
    }
})