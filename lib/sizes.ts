import { Sizes } from "@/pages/api/sizes"

export const SIZES_TABLE = {
  EU:/*       */[35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 48.5, 49, 49.5].map(String),
  RU: [34.5, 35, 35.5, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 43, 43.5, 44, 44.5, 45, 46, 46.5, 47, 47.5, 48, 48.5].map(String),
  UK:/*  */[3, 3.5, 4, 4.5, 5, 5.5, 6, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14].map(String),
  US_male:/**/[3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15].map(String),
  US_female:/*           */[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5].map(String),
  FR: ["35⅓", "35⅔", "36", "36⅔", "37⅓", "38", "38⅔", "39⅓", "40", "40⅔", "41⅓", "42", "42⅔", "43⅓", "44", "44⅔", "45⅓", "46", "46⅔", "47⅓", "48", "48⅔", "49⅓", "50"],
}
// TODO: 1. корректные FR
// TODO: 2. в UK два 6 размера - это как?

// export function changeCountrySize(
//   size: string,
//   from: keyof typeof SIZES_TABLE,
//   to: keyof typeof SIZES_TABLE) {

//   const index: number = (SIZES_TABLE[from] as string[]).indexOf(size)
//   if (index === -1) throw Error(`Нет размера ${size} в SIZES_TABLE[${from}]`)

//   return SIZES_TABLE[from][index];
// }

export function mapSizesToAvailableIndices(sizes: Sizes, key: keyof typeof SIZES_TABLE) {
  return Object.entries(sizes)
    .filter(x => Number(x[1]) > 0)
    .map(x => SIZES_TABLE[key].indexOf(x[0]))
    .filter(x => x > 0)
    .sort((a, b) => a - b)
}