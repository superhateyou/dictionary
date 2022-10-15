import {ResponceActions, ResponceActionTypes, ResponceState} from "../../../types/responce";

export const initialState: ResponceState = {
  word: null, loading: false, error: null,
};

export const responceReducer = (state = initialState, action: ResponceActions): ResponceState => {
  switch (action.type) {
    case ResponceActionTypes.FETCH_WORD:
      return {word: null, loading: true, error: null};
    case ResponceActionTypes.FETCH_WORD_SUCCESS:
      return {word: action.payload, loading: false, error: null};
    case ResponceActionTypes.FETCH_WORD_ERROR:
      return {word: null, loading: false, error: action.payload};
    case ResponceActionTypes.RESET_WORD:
      return {word: null, loading: false, error: null};
    default:
      return state;
  }
};