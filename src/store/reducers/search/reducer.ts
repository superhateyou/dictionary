/** SEARCH VALUE **/
import {SearchActions, SearchActionTypes} from "../../../types/search";

const initialState = ''

export const searchReducer = (state: string = initialState, action: SearchActions): string => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH:
      return action.payload
    case SearchActionTypes.CLEAR_SEARCH:
      return ''
    default:
      return state
  }
}