// Necessities and accessories for constructing our Redux store;
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

// Construct our Redux store;
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);
const store = createStore(rootReducer, initialState, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
