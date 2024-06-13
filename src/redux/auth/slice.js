import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoading: null,
    isLoggedIn: false,
    isError: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.loggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.loggedIn = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.loggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.loggedIn = false;
        state.error = true;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.loggedIn = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export default slice.reducer;
