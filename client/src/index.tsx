import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App";
const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
