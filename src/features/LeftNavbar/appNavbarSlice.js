import { createSlice } from "@reduxjs/toolkit";
let selectedTab = "Home";
if (localStorage.getItem("selectedTabName")) {
  selectedTab = JSON.parse(localStorage.getItem("selectedTabName"));
}
export const appNavbarSlice = createSlice({
  name: "navbarSlice",
  initialState: {
    selected: selectedTab,
  },
  reducers: {
    changeSelectedTab: (state, { payload: tabName }) => {
      state.selected = tabName;
      localStorage.setItem("selectedTabName", JSON.stringify(tabName));
    },
  },
});
export const { changeSelectedTab } = appNavbarSlice.actions;

export default appNavbarSlice.reducer;
