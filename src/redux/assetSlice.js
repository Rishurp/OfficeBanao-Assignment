import { createSlice } from "@reduxjs/toolkit";

const assetSlice = createSlice({
  name: "assets",
  initialState: {
    croppedImages: [],
    lastCroppedImage: null,
  },
  reducers: {
    addCroppedImage: (state) => {
      if (!state.lastCroppedImage) {
        throw new Error("Invalid call. lastCroppedImage must not be null");
      }
      state.croppedImages.push(state.lastCroppedImage);
      state.lastCroppedImage = null;
    },
    updateLastCroppedImage: (state, action) => {
      const image = action.payload;
      state.lastCroppedImage = image;
    },
  },
});

export const { addCroppedImage, updateLastCroppedImage } = assetSlice.actions;
export default assetSlice.reducer;
