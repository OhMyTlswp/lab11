import { createStore } from "redux";
import indexReducer from "./reducers/indexReducer";
import initialState from "./initialState";
const store = createStore(
  indexReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
