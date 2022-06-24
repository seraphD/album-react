import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
    name: "album",
    initialState: {
      name: "",
      albums: [],
      count: 0,
      loading: false,
    },
    reducers: {
      search: (state, action) => {
        const { name, results } = action.payload;

        state.name = name;
        state.albums = [...results];
        state.count = results.length;
      },
      startLoading: (state) => {
        state.loading = true;
        state.albums = [];
      },
      endLoading: (state) => {
        state.loading = false;
      }
    }
});
  
export const { search, startLoading, endLoading } = albumSlice.actions;

export const selectName = (state) => state.album.name;
export const selectCount = (state) => state.album.count;
export const selectAlbums = (state) => state.album.albums;
export const selectLoading = (state) => state.album.loading;

export default albumSlice.reducer;