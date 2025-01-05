import { createSlice } from "@reduxjs/toolkit";

const assetSlice = createSlice({
  name: "assets",
  initialState: {
    lastEditedImage: null,
    images: [],
  },
  reducers: {
    addEditedImage: (state) => {
      if (!state.lastEditedImage) {
        throw new Error("Invalid call. lastEditedImage must not be null");
      }
      state.images.push(state.lastEditedImage);
      state.lastEditedImage = null;
    },
    updateLastEditedImage: (state, action) => {
      const image = action.payload;
      state.lastEditedImage = image;
    },
  },
});

export const { addEditedImage, updateLastEditedImage } = assetSlice.actions;
export default assetSlice.reducer;
