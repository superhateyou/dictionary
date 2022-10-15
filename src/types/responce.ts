export interface ResponceState {
  word: IWord[] | null,
  loading: boolean,
  error: string | null,
}

export interface IWord {
  word: string,
  phonetics: IPhonetics[],
  meanings: IMeanings[],
  license: ILicense,
  sourceUrls: string[]
}

export interface IPhonetics {
  text: string,
  audio?: string,
  sourceUrl?: string,
  license?: ILicense
}

export interface IMeanings {
  partOfSpeech: string,
  definitions: IDefinition[]
}

export interface IDefinition {
  definition: string,
  example: string,
  synonyms?: string[],
  antonyms?: string[],
}

interface ILicense {
  name: string,
  url: string
}

export enum ResponceActionTypes {
  FETCH_WORD = "FETCH_WORD",
  FETCH_WORD_SUCCESS = "FETCH_WORD_SUCCESS",
  FETCH_WORD_ERROR = "FETCH_WORD_ERROR",
  RESET_WORD = "RESET_WORD"
}

interface FetchWordAction {
  type: ResponceActionTypes.FETCH_WORD;
}

interface FetchWordSuccessAction {
  type: ResponceActionTypes.FETCH_WORD_SUCCESS;
  payload: IWord[],
}

interface FetchWordErrorAction {
  type: ResponceActionTypes.FETCH_WORD_ERROR;
  payload: string,
}

interface ResetWordAction {
  type: ResponceActionTypes.RESET_WORD;
}

export type ResponceActions = FetchWordAction | FetchWordSuccessAction | FetchWordErrorAction | ResetWordAction;