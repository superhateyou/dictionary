import React from "react";
import {IDefinition, IMeanings} from "../../types/responce";

const Meanings = (meanings: IMeanings[]) => {
  return (<div className='p-2 m-2 bg-blue-300 rounded-lg'>
      <h2 className='text-lg font-bold p-2'>Meanings: </h2>
      {Object.values(meanings)?.map((el: IMeanings, indexMeaning) => <div key={indexMeaning}
                                                                          className='p-2 rounded-lg m-2 bg-blue-200'>
        {el.partOfSpeech ? <div className='font-bold flex flex-row items-center pb-2 pt-2'>Part of speech:
          <div className='font-medium font-light ml-2'>{el.partOfSpeech}</div>
        </div> : null}
        {el.definitions ? <div className='font-bold'>Definitions:
          {el.definitions.map((element: IDefinition, indexDefinition) => <div className='p-2 rounded-lg m-2 bg-blue-100'
                                                                              key={indexDefinition}>
            <div>Definition:
              <div className='font-medium font-light ml-2'>{element.definition}</div>
            </div>
            {element.example ? <div className='font-bold'>Example:
              <div className='font-medium font-light ml-2'>{element.example}</div>
            </div> : null}
            {element.synonyms && element.synonyms.length > 0 ?
              <div>Synonym: {element.synonyms.map((synonym: string, indexSynonym) => (
                <div className='font-medium font-light ml-2' key={indexSynonym}>
                  - {synonym}
                </div>))}</div> : null}
            {element.antonyms && element.antonyms.length > 0 ?
              <div>Antonym: {element.antonyms.map((antonym: string, indexAntonym) => (
                <div className='font-medium font-light ml-2' key={indexAntonym}>
                  - {antonym}
                </div>))}</div> : null}
          </div>)}
        </div> : null}
      </div>)}
    </div>);
};

export default Meanings;