import GuestBookModel from "./GuestBookModel";

// Can have multiple stores inside the store interface. This is what the typed hooks are created from.
export default interface Store {
  guestbook: GuestBookModel;
}
