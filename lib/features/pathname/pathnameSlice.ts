import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pathname: "",
};

export const sidebarSlice = createSlice({
  name: "pathname",
  initialState,
  reducers: {
    setPathname: (state, action) => {
      const targetMode = action.payload;
      state.pathname = targetMode;
    },
  },
});

export const { setPathname } = sidebarSlice.actions;
export default sidebarSlice.reducer;
