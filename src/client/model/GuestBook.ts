import { Action, action, Thunk, thunk, computed, Computed } from "easy-peasy";

// Single guest book entry
export interface GuestBookEntry {
  name: string;
  content: string;
  submitted: string;
  id: number;
}

// Array of guest book entries
export interface GuestBookModel {
  entries: GuestBookEntry[];
  reverseEntries: Computed<GuestBookModel, GuestBookEntry[]>;
  getEntries: Thunk<GuestBookModel>;
  setEntries: Action<GuestBookModel, GuestBookEntry[]>;
  createEntry: Thunk<GuestBookModel, GuestBookEntry>;
  addEntry: Action<GuestBookModel, GuestBookEntry>;
}

// initial state
const guestBookModel: GuestBookModel = {
  entries: [],
  reverseEntries: computed((state) => state.entries.slice().reverse()),
  getEntries: thunk(async (state) => {
    const response = await fetch("http://localhost:4000/entries");
    const entries = await response.json();
    state.setEntries(entries);
  }),
  setEntries: action((state, entries) => {
    // eslint-disable-next-line no-param-reassign
    state.entries = entries;
  }),
  createEntry: thunk(async (state, entry) => {
    const response = await fetch("http://localhost:4000/entries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    const result = await response.json();
    state.addEntry(result);
  }),
  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),
};

export default guestBookModel;
