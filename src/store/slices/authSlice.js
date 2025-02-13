import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { signIn, signUp } from "helpers/client";
import { getUsers, getCurrentUser } from "helpers/utility";

export const userSignUp = createAsyncThunk(
  "auth/userSignUp",
  async (userinfo, thunkAPI) => {
    try {
      const response = await signUp(userinfo);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "auth/userSignIn",
  async (userInfo, thunkAPI) => {
    try {
      const response = await signIn(userInfo);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  status: null, //loading || success || fail
  user: getCurrentUser() || null,
  users: getUsers() || [],
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
    resetStatus: (state) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //user sign up reducers
      .addCase(userSignUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        const { status, users } = action.payload;
        state.status = status;
        state.users = users;
        state.error = null;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        const { status, message } = action.payload;
        state.status = status;
        state.error = message;
      })
      //user sign in reducers
      .addCase(userSignIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        const { status, user } = action.payload;
        state.status = status;
        state.user = user;
        state.error = null;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        const { status, message } = action.payload;
        state.status = status;
        state.error = message;
      });
  },
});
export const { logOut, resetStatus } = authSlice.actions;

export default authSlice.reducer;
