import { configureStore } from "@reduxjs/toolkit";
import itemSlice, { listenerMiddleware } from "../slices/itemSlice";


const bucketState = typeof localStorage !== 'undefined'
  ? JSON.parse(localStorage?.getItem(itemSlice.name) || "null")
  : []

export const store = configureStore({
  preloadedState: {
    [itemSlice.name]: bucketState === null ? [] : bucketState
  },
  reducer: {
    items: itemSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
