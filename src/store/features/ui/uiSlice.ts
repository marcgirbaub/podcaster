import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialUiState: UiState = { isLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {},
});

export const uiReducer = uiSlice.reducer;
