import { createStore } from "redux";
import productListReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(productListReducer, composeWithDevTools());
