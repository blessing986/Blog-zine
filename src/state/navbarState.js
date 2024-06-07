import { createSlice } from "@reduxjs/toolkit";

const initialState = { showMenu: false };

const navbarState = createSlice({
  name: "menuList",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const navbarStateActions = navbarState.actions;

export default navbarState;
