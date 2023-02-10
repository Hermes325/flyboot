import { createListenerMiddleware, createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/lib/datocms";
import { RootState } from "../store/store";

export type BucketItem = {
  item: Item
  amount: number
  // Храним все размеры, чтобы изменять в корзине
  size: {
    chosen: number
    available: number[]
    locale: string
  }
}

const itemSlice = createSlice({
  name: "bucket",
  initialState: [] as BucketItem[],
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      // Прибавляем 1
      const index = state.findIndex(x => x.item.id === action.payload.id)
      if (index !== -1) {
        state[index].amount++;
        return
      }

      // Добавляем новый
      state.push({
        item: action.payload,
        amount: 1,
        size: { chosen: 41, available: [], locale: "ru" }
      });
    },
    minusItemAmount: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex(x => x.item.id === action.payload.id)
      if (state[index].amount > 0)
        state[index].amount--;
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      return state.filter((x) => x.item.slug != action.payload.slug);
    },
    deleteAll: (state) => {
      state = [];
    },
  },
});

export const { addItem, minusItemAmount, deleteItem, deleteAll } = itemSlice.actions;
export default itemSlice.reducer;