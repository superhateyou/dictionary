import React from 'react';
import {useNavigate} from "react-router-dom";
import {SearchActionTypes} from "../../types/search";
import {ResponceActionTypes} from "../../types/responce";
import {useAppDispatch} from "../../hooks/useTypedDispatch";

const ReturnButton = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const returnHandler = () => {
    navigate('/')
    dispatch({type: SearchActionTypes.CLEAR_SEARCH})
    dispatch({type: ResponceActionTypes.RESET_WORD})
  }

  return (
    <button type="button"
            onClick={() => returnHandler()}
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <span>
          Return to main page
        </span>
    </button>
  )
};

export default ReturnButton;