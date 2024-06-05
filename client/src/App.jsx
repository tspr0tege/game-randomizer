import React, { useRef } from 'react';

import { genres, cameras } from '../data';

import SelectList from './components/SelectList';

export default () => {
  const randomizeGenres = useRef(null);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <SelectList dataset={genres} buttonRef={randomizeGenres}/>
    </div>
  );
}