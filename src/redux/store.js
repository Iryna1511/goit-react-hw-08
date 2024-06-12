import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filters: filtersReducer,
  },
});
