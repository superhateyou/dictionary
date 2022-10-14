import React from 'react';
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const NotFound = () =>
    <div className="flex items-center flex-col p-10 mt-32 justify-center">
      <h1 className='text-4xl pb-5'>Oops! Page not found</h1>
      <ReturnButton/>
    </div>

export default NotFound;