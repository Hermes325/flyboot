import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/lib/datocms";

const initialState: Item[] = [];

const itemSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      return state.filter((x) => x.slug != action.payload.slug);
    },
    deleteAll: (state) => {
      state = [];
    },
  },
});

export const { addItem, deleteItem, deleteAll } = itemSlice.actions;
export default itemSlice.reducer;
