import { configureStore } from "@reduxjs/toolkit";

import navbarState from "./navbarState";
import fetchingDataState from "./fetchingDataState";

const store = configureStore({
  reducer: { menuList: navbarState.reducer, fetch: fetchingDataState.reducer },
});

export default store;
