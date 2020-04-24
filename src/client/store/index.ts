import { createStore } from "easy-peasy";
import model, { StoreModel } from "../model/index";

// Creates the store using the StoreModel interface and the initial state
// for the store is imported from the default storeModel export in "../model/index.ts"
const store = createStore<StoreModel>(model);

export default store;
