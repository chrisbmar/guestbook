import { createTypedHooks } from "easy-peasy"; // 👈import the helper
import StoreModel from "../interfaces/Store"; // 👈 import our model type

// Provide our model to the helper
const typedHooks = createTypedHooks<StoreModel>();

// export the typed hooks
export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;
