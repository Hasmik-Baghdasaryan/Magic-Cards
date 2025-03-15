import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = cardSlice.actions;
export default cardSlice.reducer;
