import { createTypedHooks } from "easy-peasy"; // 👈import the helper
import GuestBookStore from "../interfaces/GuestBookStore"; // 👈 import our model type

// Provide our model to the helper
const typedHooks = createTypedHooks<GuestBookStore>();

// export the typed hooks
export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;
