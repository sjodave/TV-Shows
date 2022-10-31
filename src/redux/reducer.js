import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  showList: [],
  sortedShowList: [],
  Crime: [],
  Action: [],
  Thriller: [],
  SciFi: [],
  Drama: [],
  Fantasy: [],
  currentShow: "",
  api: "",
  category: "",
  crewData: [],
  searchedShow: [],
  page: 0,
};
export const reducerSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSortList: (state, action) => {
      state.showList = action.payload;
      state.sortedShowList = action.payload;
      state.Action = action.payload.filter((show) => {
        return show.genres.includes("Action");
      });
      state.Crime = action.payload.filter((show) => {
        return show.genres.includes("Crime");
      });
      state.SciFi = action.payload.filter((show) => {
        return show.genres.includes("Science-Fiction");
      });
      state.Thriller = action.payload.filter((show) => {
        return show.genres.includes("Thriller");
      });
      state.Fantasy = action.payload.filter((show) => {
        return show.genres.includes("Fantasy");
      });
      state.Drama = action.payload.filter((show) => {
        return show.genres.includes("Drama");
      });
    },
    sortListItem: (state, action) => {
      state.sortedShowList = action.payload;
    },
    setCurrentShow: (state, action) => {
      //states ate immutable in redux
      state.currentShow = action.payload;
      state.api = action.payload._links.previousepisode.href;
    },
    setCrewData: (state, action) => {
      state.crewData = action.payload;
    },
    setSearchedShow: (state, action) => {
      state.searchedShow = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  searchShows,
  setLoading,
  setSortList,
  sortListItem,
  setCurrentShow,
  setCrewData,
  setSearchedShow,
  setPage,
} = reducerSlice.actions;
export default reducerSlice.reducer;
