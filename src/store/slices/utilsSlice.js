import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    defaultCurrencyCode: "AED",
    defaultCurrencyMask: "999,999,999.00",
    currencyCode: "AED",
    currencyCodeMask: null,
    isLoading: false,
    currencyList: [
      { label: "99,99,9999.00", value: "99,99,9999.00" },
      { label: "999,999,999.00", value: "999,999,999.00" },
      { label: "9,99,999.00", value: "9,99,999.00" },
    ],
    error: null,
  },
  reducers: {
    updateState(state, action) {
      state[action.payload.key] = action.payload.value;
    },
  },
});
export const { updateState } = utilsSlice.actions;
export const utilsReducer = utilsSlice.reducer;
