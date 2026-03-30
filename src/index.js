// starting pt

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
// connection
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>   
    <App />
  </Provider>
);
// provider -  store access to the entire app . 