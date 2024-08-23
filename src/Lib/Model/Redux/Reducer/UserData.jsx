import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
    name:"userData",
    initialState:{
         userValue:{},
         userTube:{},
         userVideo:[],
         userPastWatch:[],
         userWillWatch:[],
         userMemberVideo:[],
    }
})