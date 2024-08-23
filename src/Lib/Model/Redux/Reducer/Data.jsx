import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
    name:"data",
    initialState:{
        appStatus:{
           selectedSide:"",
           onSide:false,
        },
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

   1-Video Resmi Linki = URL
   2-Başlık = String
   3-Yayınlayan Kanal ID = String
   4-Görüntülenme Sayısı = İnt
   5-Yayın Tarihi = Date
   6-Video Linki = URL
   7-Taglar = Array
   8-İzlenme sayısı = İnt
   9-Beğenme sayısı = İnt
   10-Beğenilmeme sayısı = İnt
   11-Yorumlar = Array
   12-Video açıklaması = String

*/
/*
Kanal Datası

  1-Kanal adı
  2-Kanal linki
  3-Kanal abone sayısı
  4-Kanal ID
  5-Kanal açıklaması

*/