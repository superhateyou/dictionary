import {useAppDispatch} from "./useTypedDispatch";
import {bindActionCreators} from "redux";
import * as wordFetch from '../store/action-creator/responce'

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(wordFetch, dispatch)
}