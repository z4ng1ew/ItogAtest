import {configureStore} from "@reduxjs/toolkit"
import historySlice from "./slice/HistoreSlice"



export const store = configureStore({
  reducer:{
    History:historySlice,
    
  },
  devTools:true
})

