import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
};

export const getNews = createAsyncThunk(
  "getNews", //? action types
  //? async callback func
  async () => {
    const API_KEY = "ded485c0a96e4a279936f4e32125cf4c";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  }
);
try {
  const { data } = await axios(url);
  console.log(data);
  return data;
} catch (error) {
  console.log(error);
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = payload;
        state.loading = false;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
