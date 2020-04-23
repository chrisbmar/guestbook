import { createStore } from "easy-peasy";

import Store from "../interfaces/Store";
import GuestBook from "./GuestBook";

// Main wrapper, can have multiple stores inside the default state passed to create store
const store: Store = {
  guestbook: GuestBook,
};

export default createStore<Store>(store);
