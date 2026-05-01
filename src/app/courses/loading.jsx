import React from 'react';

const loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <h2>Loading...</h2>
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default loading;