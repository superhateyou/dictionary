import React from "react";

import randomWords from "random-words";
import {useNavigate} from "react-router-dom";

const Random = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${randomWords(1)}`)
  }

  return (<button type="button"
                  onClick={() => clickHandler()}
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <span>
          Test your luck!
        </span>
    </button>)
};

export default Random;