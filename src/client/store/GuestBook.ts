import GuestBookModel from "../interfaces/GuestBookModel";

const GuestBook: GuestBookModel = {
  // initial state
  entries: [
    {
      name: "Chris",
      content: "First person to sign the guestbook!",
      submitted: new Date(),
    },
  ],
};

export default GuestBook;
