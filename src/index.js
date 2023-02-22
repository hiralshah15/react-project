import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import ReduxPromise from "redux-promise";

import App from "./App";
const store = createStore(
  reducers,
  applyMiddleware(thunk, logger, ReduxPromise)
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
