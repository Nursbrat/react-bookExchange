import React from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import store from "./app/store.js";
import { Provider } from "react-redux";
=======
import { Provider } from "react-redux";
import store from "./app/store.js";

>>>>>>> 2f8efae5ab5314f174151a577eeb2a5a7a5b6523

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
