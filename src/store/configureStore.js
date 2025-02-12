import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";

function configureAppStore() {
  return configureStore({
    reducer: {
      auth: authSlice,
    },
  });
}

export default configureAppStore;
