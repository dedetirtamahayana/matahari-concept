import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
  },
  reducers: {
    inputbiodataStart(state) {
      state.loading = true;
    },
    inputSuccess(state, action) {
      state.loading = false;
    },
    inputFailure(state) {
      state.loading = false;
    },
  },
});

export const { inputbiodataStart, inputSuccess, inputFailure } =
  profileSlice.actions;

export default profileSlice.reducer;
