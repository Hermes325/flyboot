import { Sizes } from '@/pages/api/sizes';
import { createSlice } from "@reduxjs/toolkit";
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
    // Страница товара & "+" в корзине
    addItem: (state, action: PayloadAction<BucketItem>) => {
      // Прибавляем 1
      const index = state.findIndex(x => x.item.id === action.payload.item.id)
      if (index !== -1
        // Разные размеры 1 товара
        && state[index].size.chosenSizeKey === action.payload.size.chosenSizeKey
        && state[index].size.chosenSizeValue === action.payload.size.chosenSizeValue) {
        state[index].amount++;
        return
      }

      // Добавляем новый
      state.push(action.payload);
    },
    // Страница корзины
    changeItemSize: (state, action: PayloadAction<{ item: BucketItem, size: BucketItem["size"] }>) => {
      const index = state.findIndex(x =>
        x.item.id === action.payload.item.item.id &&
        x.size.chosenSizeKey === action.payload.size.chosenSizeKey &&
        x.size.chosenSizeValue === action.payload.size.chosenSizeValue)

      if (index === -1) return;

      state[index].size.chosenSizeValue = action.payload.size.chosenSizeValue
    },
    // Страница корзины
    minusItemAmount: (state, action: PayloadAction<BucketItem>) => {
      const index = state.findIndex(x =>
        x.item.id === action.payload.item.id &&
        x.size.chosenSizeKey === action.payload.size.chosenSizeKey &&
        x.size.chosenSizeValue === action.payload.size.chosenSizeValue)

      if (index !== -1 && state[index].amount > 0)
        state[index].amount--;
    },
    // Страница корзины
    deleteItem: (state, action: PayloadAction<BucketItem>) => {
      return state.filter(({ item, size }) =>
        !(item.id === action.payload.item.id
          && size.chosenSizeKey === action.payload.size.chosenSizeKey
          && size.chosenSizeValue === action.payload.size.chosenSizeValue))
    },
    // После оплаты удаляем товары из корзины
    deleteAllItems: (state) => {
      return [];
    },
  },
});

export const { addItem, minusItemAmount, changeItemSize, deleteItem, deleteAllItems } = itemSlice.actions;
export default itemSlice.reducer;