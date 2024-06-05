import React, { useState } from 'react';

export default ({ text, index }) => {
  const [checked, setChecked] = useState(true);

  return(
    <label key={index} data-index={index}>
      <input 
        style={{marginRight: '.5em'}}
        type="checkbox" 
        checked={checked}
        onChange={() => {setChecked(!checked)}}
      />
      {text}
    </label>
  );
}