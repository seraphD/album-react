import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
    name: "album",
    initialState: {
      name: "",
      albums: [],
      count: 0,
    },
    reducers: {
      search: (state, action) => {
        const { name, results } = action.payload;

        state.name = name;
        state.albums = results;
        state.count = results.length;
      },
    }
  });
  
  export const { search } = albumSlice.actions;
  
  export const selectName = (state) => state.album.name;
  export const selectCount = (state) => state.album.count;
  export const selectAlbums = (state) => state.album.albums;
  
  export default albumSlice.reducer;