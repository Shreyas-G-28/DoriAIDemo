// src/store/videoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
  customURL: "",
  customVideo: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.customVideo = null;
      state.currentIndex = action.payload;
    },
    nextVideo: (state, action) => {
      state.customVideo = null;
      state.currentIndex = (state.currentIndex + 1) % action.payload;
    },
    prevVideo: (state, action) => {
      state.customVideo = null;
      state.currentIndex =
        (state.currentIndex - 1 + action.payload) % action.payload;
    },
    setCustomURL: (state, action) => {
      state.customURL = action.payload;
    },
    setCustomVideo: (state, action) => {
      state.customVideo = action.payload;
    },
  },
});

export const {
  setCurrentIndex,
  nextVideo,
  prevVideo,
  setCustomURL,
  setCustomVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
