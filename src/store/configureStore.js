import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/authSlice";

function configureAppStore() {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
}

export default configureAppStore;
