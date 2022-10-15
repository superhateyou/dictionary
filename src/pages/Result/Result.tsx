import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../../partials/loader";
import Word from "../../components/Word/Word";
import NotFound from "../NotFound/NotFound";

const Result = () => {
  const {loading, error} = useTypedSelector(state => state.responce);

  if (loading) {
    return (<Loader/>);
  }

  return (<>
      {!error ? <Word/> : <NotFound/>}
    </>);
};

export default Result;