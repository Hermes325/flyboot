/**
 * Используется в заказе и при формировании чека
 */
export type Order = {
  name: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  build: string;
  apartment: string;
  delivery: "Sdek" | "BoxBerry" | "personal delivery";
  personalDataCheck: boolean;
  Sdek: any;
  BoxBerry: any;
  startPayment: number;
  comment: string;
};