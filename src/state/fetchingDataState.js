import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CONSTANTS } from "../constant";

const Home_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${CONSTANTS.ApiKey}`;

const Business_URL = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${CONSTANTS.ApiKey}`;

const Politics_URL = `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${CONSTANTS.ApiKey}`;

const Sports_URL = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${CONSTANTS.ApiKey}`;

const Technology_URL = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${CONSTANTS.ApiKey}`;

const Food_URL = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${CONSTANTS.ApiKey}`;

export const fetchNews = createAsyncThunk("fetchNews", async (page) => {
  let result;

  switch (page) {
    case "home":
      result = await fetch(Home_URL);
      break;

    case "business":
      result = await fetch(Business_URL);
      break;

    case "politics":
      result = await fetch(Politics_URL);
      break;

    case "sports":
      result = await fetch(Sports_URL);
      break;

    case "technology":
      result = await fetch(Technology_URL);
      break;

    case "food":
      result = await fetch(Food_URL);
      break;
    default:
  }

  if (!result.ok) {
    throw new Error("Failed to fetch post");
  }

  return result.json();
});

const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

const fetchingDataState = createSlice({
  name: "fetch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    });

    builder.addCase(fetchNews.rejected, (state) => {
      state.error = true;
    });
  },
});

export const fetchingDataStateActions = fetchingDataState.actions;

export default fetchingDataState;
