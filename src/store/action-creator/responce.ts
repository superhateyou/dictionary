import {ResponceActions, ResponceActionTypes} from "../../types/responce";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchWord = (word: string) => {
  return async (dispatch: Dispatch<ResponceActions>) => {
    try {
      dispatch({type: ResponceActionTypes.FETCH_WORD});
      await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
      .then((result) => dispatch({type: ResponceActionTypes.FETCH_WORD_SUCCESS, payload: result.data}));
    } catch (error) {
      dispatch({type: ResponceActionTypes.FETCH_WORD_ERROR, payload: "Error"});
    }
  };
};