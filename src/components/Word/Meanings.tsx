import React from 'react';
import {IDefinition, IMeanings} from "../../types/responce";

const Meanings = (meanings: IMeanings[]) => {
  console.log(meanings)
  return (
    <div className='p-2 m-5 bg-blue-300 rounded-lg'>
      <h2 className='text-lg font-bold p-2'>Meanings: </h2>
      {Object.values(meanings)?.map((el: IMeanings, index) => <div key={index} className='p-3 rounded-lg m-2 bg-blue-200'>
        {el.partOfSpeech ? <div className='font-bold flex flex-row items-center pb-2 pt-2'>Part of speech:
          <div className='font-medium font-light ml-2'>{el.partOfSpeech}</div>
        </div> : null}
        {el.definitions ? <div className='font-bold' >Definitions:
          {el.definitions.map((element: IDefinition) => <div className='p-3 rounded-lg m-5 bg-blue-100'>
            <div >Definition:
              <div className='font-medium font-light ml-5'>{element.definition}</div>
            </div>
            {element.example ? <div className='font-bold'>Example:
              <div className='font-medium font-light ml-5'>{element.example}</div>
            </div> : null}
            {element.synonyms && element.synonyms.length > 0 ? <div>Synonym: {element.synonyms.map((synonym: string) => (
              <div className='font-medium font-light ml-5'>
                - {synonym}
              </div>
            ))}</div> : null}
            {element.antonyms && element.antonyms.length > 0 ? <div>Antonym: {element.antonyms.map((antonym: string) => (
              <div className='font-medium font-light ml-5'>
                - {antonym}
              </div>
            ))}</div> : null}
          </div>)}
        </div> : null}
      </div>)}
    </div>
  )
};

export default Meanings;