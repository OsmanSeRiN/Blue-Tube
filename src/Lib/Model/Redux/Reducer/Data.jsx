import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
    name:"data",
    initialState:{
        userData:{},
        appStatus:{
           selectedSide:"",
           onSide:false
        }
    },
    reducers:{
       selectedSideItem:(state,action)=>{
          state.appStatus.selectedSide = action.payload
       },
       openSide:(state,action)=>{
         state.appStatus.onSide = action.payload
       },

    }
})

export const {selectedSideItem,openSide} = data.actions