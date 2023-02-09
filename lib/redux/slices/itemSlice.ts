import { createListenerMiddleware, createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@/lib/datocms";
import { RootState } from "../store/store";

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

const localStorageBucket = localStorage.getItem("bucket")
const initialState: BucketItem[] = localStorageBucket === null
  ? []
  : JSON.parse(localStorageBucket) as BucketItem[]

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

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addItem, deleteItem, deleteAll),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      itemSlice.name,
      JSON.stringify((listenerApi.getState() as RootState).items)
    )
});

export default itemSlice.reducer;