import React, { useState } from 'react';

export default ({ text, index, setFocus, setShowList }) => {
  const [checked, setChecked] = useState(true);

  function handleClick() {
    setFocus(index);
    setShowList(false);
  }

  return(
    <div data-index={index}>
      <input 
        style={{marginRight: '.5em'}}
        type="checkbox" 
        checked={checked}
        onChange={() => {setChecked(!checked)}}
      />
      <p className="option-text" onClick={handleClick}>{text}</p>
    </div>
  );
}