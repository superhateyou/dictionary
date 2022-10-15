export enum SearchActionTypes {
  SET_SEARCH = "SET_SEARCH", CLEAR_SEARCH = "CLEAR_SEARCH"
}

interface SetSearchAction {
  type: SearchActionTypes.SET_SEARCH;
  payload: string;
}

interface ClearSearchAction {
  type: SearchActionTypes.CLEAR_SEARCH;
}

export type SearchActions = SetSearchAction | ClearSearchAction