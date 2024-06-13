import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../redux/filters/slice";
import contactsReducer from "../redux/contacts/slice";
import authReducer from "../redux/auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filters: filtersReducer,
  },
});
