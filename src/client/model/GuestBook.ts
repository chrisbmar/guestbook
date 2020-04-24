import { Action, action, Thunk, thunk } from "easy-peasy";

// Single guest book entry
export interface GuestBookEntry {
  name: string;
  content: string;
  submitted: Date;
}

// Array of guest book entries
export interface GuestBookModel {
  entries: GuestBookEntry[];
  setEntries: Action<GuestBookModel, GuestBookEntry[]>;
  addEntry: Action<GuestBookModel, GuestBookEntry>;
  getEntries: Thunk<GuestBookModel>;
}

// initial state
const guestBookModel: GuestBookModel = {
  entries: [],
  setEntries: action((state, entries) => {
    // eslint-disable-next-line no-param-reassign
    state.entries = entries;
  }),
  addEntry: action((state, payload) => {
    state.entries.unshift(payload);
  }),
  getEntries: thunk(async (state) => {
    const response = await fetch("http://localhost:4000/entries");
    const entries = await response.json();
    state.setEntries(entries);
  }),
};

export default guestBookModel;
