import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import cardsSlice from "./slices/cardsSlice";

function configureAppStore() {
  return configureStore({
    reducer: {
      auth: authSlice,
      cards: cardsSlice,
    },
  });
}

export default configureAppStore;
