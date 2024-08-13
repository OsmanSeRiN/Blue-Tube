import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
    name:"data",
    initialState:{
        userData:{},
        appStatus:{
           selectedSide:"",
           onSide:false,
        },
        videoData:[]
    },
    reducers:{
       selectedSideItem:(state,action)=>{
          state.appStatus.selectedSide = action.payload
          console.log(action.payload)
       },
       openSide:(state,action)=>{
         state.appStatus.onSide = action.payload
       },

    }
})

export const {selectedSideItem,openSide} = data.actions

/*
Video Datası İçin Gereken Alanlar:

   1-Video Resmi Linki
   2-Başlık
   3-Yayınlayan Kanal ID
   4-Görüntülenme Sayısı
   5-Yayın Tarihi
   6-Video Linki
   7-Taglar

*/