import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../../partials/loader";
import Word from "../../components/Word/Word";
import NotFound from "../NotFound/NotFound";

const Result = () => {
  const responceData = useTypedSelector(state => state.responce)
  const loading: boolean = responceData.loading || false;
  const error: string | null = responceData.error

  if (loading) return (
    <Loader/>
  )
  else return (
    <div>
      {!error ? <Word/> : <NotFound/>}
    </div>
  )
};

export default Result;