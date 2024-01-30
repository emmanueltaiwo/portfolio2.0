import { configureStore } from "@reduxjs/toolkit";
import pathnameReducer from "./features/pathname/pathnameSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      pathname: pathnameReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
