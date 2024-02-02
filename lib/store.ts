import { dogApi } from "@/services/dog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";

export const faveLocalStorageKey = "favoriteBreedImages";

const reducers = combineReducers({
  [dogApi.reducerPath]: dogApi.reducer,
  favorites: favoritesReducer,
});

const faveLocalStorage = localStorage.getItem(faveLocalStorageKey);
const persistedState = faveLocalStorage ? JSON.parse(faveLocalStorage) : {};

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    preloadedState: { favorites: persistedState },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dogApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
