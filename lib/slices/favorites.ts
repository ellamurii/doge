import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = Record<string, string[]>;
type Action = { breed: string; image: string };

const initialState: State = {};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    like: (state: State, action: PayloadAction<Action>) => {
      const { breed, image } = action.payload;

      return {
        ...state,
        [breed]: !state[breed] ? [image] : [...state[breed], image],
      };
    },
    dislike: (state: State, action: PayloadAction<Action>) => {
      const { breed, image } = action.payload;
      return {
        ...state,
        [breed]: state[breed].filter((b) => b !== image),
      };
    },
  },
});
export const { like, dislike } = favoritesSlice.actions;
export default favoritesSlice.reducer;
