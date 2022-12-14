import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IWord} from "../../types/responce";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

const Word = () => {
  const wordData: IWord[] | null = useTypedSelector(state => state.responce.word);

  if (wordData) return (<>
      {wordData?.map((word: IWord, index) => <div key={index} className='bg-blue-400 rounded-lg m-2 p-2'>
        <h1 className='text-2xl font-bold p-2 flex justify-center'>
          {word.word}{wordData?.length > 1 ? " №" + `${index + 1}` : null}
        </h1>
        <Phonetics {...word.phonetics}/>
        <Meanings {...word.meanings}/>
      </div>)}
    </>); else return null;
};

export default Word;