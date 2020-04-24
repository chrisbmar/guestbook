import guestBookModel, { GuestBookModel } from "./GuestBook";

// Can have multiple stores inside the StoreModel interface. This is what the typed hooks are created from.
export interface StoreModel {
  guestbook: GuestBookModel;
}

const storeModel: StoreModel = {
  guestbook: guestBookModel,
};

export default storeModel;
