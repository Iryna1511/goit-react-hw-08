import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const data = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return data;
  }
);
