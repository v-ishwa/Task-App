import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import taskReducer from "../slices/taskSlice";
import themeReducer from "../slices/themeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    theme: themeReducer,
  },
});

export default store;
