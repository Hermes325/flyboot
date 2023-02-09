import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/lib/datocms";

// Лучше хранить список из товаров и при добавлении товара дублировать запись.
type BucketItem = {
  item: Item
  // Храним все размеры, чтобы изменять в корзине
  size: {
    chosen: number
    available: number[]
    locale: string
  }
}

const initialState: BucketItem[] = []

const itemSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push({
        item: action.payload,
        size: { chosen: 1, available: [], locale: "ru" }
      });
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      return state.filter((x) => x.item.slug != action.payload.slug);
    },
    deleteAll: (state) => {
      state = [];
    },
  },
});

export const { addItem, deleteItem, deleteAll } = itemSlice.actions;
export default itemSlice.reducer;
