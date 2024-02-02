import { dogApi } from "@/services/dog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";

export const faveLocalStorageKey = "favoriteBreedImages";

const reducers = combineReducers({
  [dogApi.reducerPath]: dogApi.reducer,
  favorites: favoritesReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dogApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
