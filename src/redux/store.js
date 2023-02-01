import { createStore } from "redux";
import { registerReducer } from "./reducer/registerReducer";

export const store = createStore(registerReducer)