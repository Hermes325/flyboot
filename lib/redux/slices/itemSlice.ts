import { Sizes } from '@/pages/api/sizes';
import { createListenerMiddleware, createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/lib/datocms";

export type BucketItem = {
  item: Item
  amount: number
  // Храним все размеры, чтобы изменять в корзине
  size: {
    chosenSizeValue: number
    chosenSizeKey: string
    available: Sizes
  }
}

const itemSlice = createSlice({
  name: "bucket",
  initialState: [] as BucketItem[],
  reducers: {
    addItem: (state, action: PayloadAction<BucketItem>) => {
      // Прибавляем 1
      const index = state.findIndex(x => x.item.id === action.payload.item.id)
      if (index !== -1) {
        state[index].amount++;
        return
      }

      // Добавляем новый
      state.push(action.payload);
    },
    minusItemAmount: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex(x => x.item.id === action.payload.id)
      if (state[index].amount > 0)
        state[index].amount--;
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      return state.filter(x => x.item.id != action.payload.id);
    },
    deleteAll: (state) => {
      state = [];
    },
  },
});

export const { addItem, minusItemAmount, deleteItem, deleteAll } = itemSlice.actions;
export default itemSlice.reducer;