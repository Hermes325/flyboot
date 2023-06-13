import { Order } from "./types";

export const emptyOrder: Order =
  process.env.NEXT_PUBLIC_IS_PROD === undefined
    //* TEST 
    ? {
      name: "имя",
      phone: "+719581958",
      email: "тест@gmail.com",
      comment: "тестовый комментарий",
      city: "город",
      street: "улица",
      build: "строение",
      apartment: "квартира",
      delivery: "personal delivery",
      personalDataCheck: true,
      Sdek: {},
      BoxBerry: {},
      startPayment: 0,
    }
    //* PROD
    : {
      name: "",
      phone: "",
      email: "",
      comment: "",
      city: "",
      street: "",
      build: "",
      apartment: "",
      delivery: "personal delivery",
      personalDataCheck: true,
      Sdek: {},
      BoxBerry: {},
      startPayment: 0,
    };