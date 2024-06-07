import { configureStore } from "@reduxjs/toolkit";

import navbarState from "./navbarState";

const store = configureStore({
  reducer: { menuList: navbarState.reducer },
});

export default store;
