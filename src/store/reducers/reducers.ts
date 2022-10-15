import {combineReducers} from "redux";
import {searchReducer} from "./search/reducer";
import {responceReducer} from "./responce/reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  responce: responceReducer
});

export type RootState = ReturnType<typeof rootReducer>