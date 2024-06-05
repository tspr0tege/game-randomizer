import React, { useState, useRef, useEffect } from 'react';

import Option from './Option';

export default ({ dataset, buttonRef }) => {
  const [ focus, setFocus ] = useState(0);
  const [ locked, setLocked ] = useState(false);
  const [ showList, setShowList ] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    selectRef.current.scrollTop = (focus * 28) + 8;
  }, [focus, showList]);

  function randomizeSelection() {
    const optionsList = Array.from(selectRef.current.childNodes)
      .filter((label) => {
        return label.firstChild.checked === true;
      });

    setFocus(optionsList[Math.floor(Math.random() * optionsList.length)].dataset.index);
  }

  function toggleLock() {
    setLocked(!locked);
  }

  function toggleList() {
    setShowList(!showList);
  }

  document.addEventListener('click', (event) => {
    if (showList && event.target.closest('.custom-dropdown') === null) {
      setShowList(false);
    }
  });

  return(
    <div style={{width: '200px'}}>
      <div 
        className="custom-dropdown"
        style={{alignItems: showList ? 'normal' : 'center'}}>
        <div
          style={{
            height: showList ? 'auto' : '1em',
            overflow: showList ? 'auto' : 'hidden',
          }}
          ref={selectRef}
          className="drop-list"
        >
          {dataset.map((text, index) => <Option text={text} index={index}/>)}
        </div>
        <button className="expand-button" onClick={toggleList}>V</button>
      </div>
      <div style={{display: 'flex'}}>
        <label>
          <input checked={locked} type="checkbox" onChange={toggleLock}/>
          <p>lock</p>
        </label>
        <button ref={buttonRef} onClick={randomizeSelection} disabled={locked}>
          Randomize
        </button>
      </div>
    </div>
  );
}