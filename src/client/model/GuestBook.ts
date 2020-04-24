// Single guest book entry
export interface GuestBookEntry {
  name: string;
  content: string;
  submitted: Date;
}

// Array of guest book entries
export interface GuestBookModel {
  entries: GuestBookEntry[];
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
};

export default guestBookModel;
