import { createStore } from "redux";
import productListReducer from "./reducer";

import { composeWithDevTools } from "redux-devtools-extension";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const store = createStore(
  productListReducer,

  loadFromLocalStorage(),
  composeWithDevTools()
);
store.subscribe(() => saveToLocalStorage(store.getState()));
