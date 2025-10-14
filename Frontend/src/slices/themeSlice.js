import { createSlice } from "@reduxjs/toolkit";


const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialTheme(), //load from localStorage
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
