import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createUserCard } from "helpers/client";

export const createCard = createAsyncThunk(
  "cards/createCard",
  async (cardInfo, thunkAPI) => {
    try {
      const response = await createUserCard(cardInfo);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  allCards: [],
  error: null,
  status: null,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    resetCardAddingStatus: (state) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCard.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createCard.fulfilled, (state, action) => {
        const { cards, card, status } = action.payload;
        state.status = status;
        state.error = null;
        state.cards = cards;
        state.card = card;
      })
      .addCase(createCard.rejected, (state, action) => {
        const { status, message } = action.payload;
        state.status = status;
        state.error = message;
      });
  },
});
export const { resetCardAddingStatus } = cardSlice.actions;
export default cardSlice.reducer;
