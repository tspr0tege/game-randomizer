import React from 'react';

import { genre, camera } from '../data';

export default () => {

  return (
    <>
      <select>
        <option>{genre[0]}</option>
      </select>
      <select>
        <option>{camera[0]}</option>
      </select>
    </>
  );
}