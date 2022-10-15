import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/reducers";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;