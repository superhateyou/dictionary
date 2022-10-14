import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {SearchActionTypes} from "../../types/search";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {useActions} from "../../hooks/useActions";
import {ResponceActionTypes} from "../../types/responce";

const Search = () => {
  const location = useLocation().pathname.slice(1)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {fetchWord} = useActions()

  const searchValue = useTypedSelector(state => state.search)

  const [dirty, setDirty] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Invalid input. Input must contain only english characters')

  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
    navigate('/' + searchValue)
    event.preventDefault()
  };

  const resetHandler = () => {
    navigate('/')
    setErrorMessage('')
    setDirty(false)
    dispatch({type: SearchActionTypes.CLEAR_SEARCH})
    dispatch({type: ResponceActionTypes.RESET_WORD})
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const reg = /^[a-zA-Z]+$/
    dispatch({type: SearchActionTypes.SET_SEARCH, payload: value})
    if (!reg.test(String(value))) {
      setErrorMessage('Invalid input. Input must contain only english characters')
      setDirty(true)
    }
    else {
      setErrorMessage('')
      setDirty(false)
    }
  }

  useEffect(() => {
    if (location.length > 0) {
      fetchWord(location)
      dispatch({type: SearchActionTypes.SET_SEARCH, payload: location})
    }
  }, [location])

  return (
    <form className="flex items-center p-10">
      <label htmlFor="simple-search"
             className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        {(dirty && errorMessage) && <div className='text-red-700 absolute -mt-6 text-lg'>{errorMessage}</div>}
        <input type="text"
               id="simple-search"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search"
               value={searchValue}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                 handleChange(event)
               }
               required/>
      </div>
      <button type="submit"
              onClick={(event: React.MouseEvent<HTMLElement>) => submitHandler(event)}
              disabled={dirty}
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <span>
          Search
        </span>
      </button>
      <button type="button"
              onClick={() => resetHandler()}
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <span>
          Reset
        </span>
      </button>
    </form>
  );
};

export default Search;
