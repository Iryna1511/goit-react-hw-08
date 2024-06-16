import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../redux/filters/slice";
import contactsReducer from "../redux/contacts/slice";
import authReducer from "../redux/auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistedReducer = persistReducer(
  { key: "auth", storage, whitelist: ["token"] },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authPersistedReducer,
    filter: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
