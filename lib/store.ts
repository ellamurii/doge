import { dogApi } from "@/services/dog";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [dogApi.reducerPath]: dogApi.reducer,
      favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dogApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
