import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import indexReducer from "./reducers/indexReducer";
import thunk from "redux-thunk";

const initialState = {
  length: "dddd",
  email: "aaa",
  save_in_progress: false,
  flash_message: "",
  values: [],
  touched: [],
  errors: []
};

const store = createStore(indexReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
