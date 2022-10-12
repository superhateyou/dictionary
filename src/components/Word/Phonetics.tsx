import React from 'react';
import {IPhonetics} from "../../types/responce";
import ReactAudioPlayer from "react-audio-player";

const Phonetics = (phonetics: IPhonetics[]) => {
  return (
      <div className='p-2 m-5 bg-blue-300 rounded-lg'>
        <h2 className='text-lg font-bold p-2'>Phonetics: </h2>
        {Object.values(phonetics)?.map((el: IPhonetics, index) =>
          <div key={index} className='p-3 rounded-md m-2 bg-blue-200'>
          {el.text ? <div className='font-bold'>
            Transcription:
              <div className='font-medium font-light pl-5'>{el.text}</div>
            </div> : null}
          {el.audio ? <div className='font-bold flex flex-row items-center'>
            Audio: <div className='font-medium font-light pl-5'>
              <ReactAudioPlayer src={el.audio} autoPlay={false} controls/>
            </div>
          </div> : null}
        </div>)}
      </div>
  )
};

export default Phonetics;