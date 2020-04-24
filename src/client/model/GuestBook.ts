import { Action, action } from "easy-peasy";

// Single guest book entry
export interface GuestBookEntry {
  name: string;
  content: string;
  submitted: Date;
}

// Array of guest book entries
export interface GuestBookModel {
  entries: GuestBookEntry[];
  addEntry: Action<GuestBookModel, GuestBookEntry>;
}

// initial state
const guestBookModel: GuestBookModel = {
  entries: [
    {
      name: "Chris",
      content: "First person to sign the guestbook!",
      submitted: new Date(),
    },
  ],
  addEntry: action((state, payload) => {
    state.entries.push(payload);
  }),
};

export default guestBookModel;
