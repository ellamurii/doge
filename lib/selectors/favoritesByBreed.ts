import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const favorites = (state: RootState) => state.favorites;

export const favoritesByBreed = (key: string) =>
  createSelector(favorites, (favorites) => favorites[key] || []);
