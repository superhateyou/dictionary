import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/reducers";

const reduxDevTools = process.env.NODE_ENV === "development" ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() : null || compose;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), reduxDevTools))

export type AppDispatch = typeof store.dispatch;