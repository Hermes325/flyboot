"use client";
import { Provider } from "react-redux";
import { store, persistor } from "@/lib/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }) {
  // const initialState = JSON.parse(localStorage?.getItem("bucket") || "null") ?? []
  // return <Provider store={store(initialState)}>{children}</Provider>;
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>;
}
