import React, { useState, useRef, useEffect } from 'react';

import PadUnlocked from '@src/icons/padlock-open.svg';
import PadLocked from '@src/icons/padlock-closed.svg';
import RollDice from '@src/icons/rolling-dice.svg';
import Option from './Option';

export default ({ dataset, title, buttonRef }) => {
  const [ focus, setFocus ] = useState(0);
  const [ locked, setLocked ] = useState(false);
  const [ showList, setShowList ] = useState(false);
  const selectRef = useRef(null);

  const camelToWord = title.replace(/([A-Z])/g, " $1");
  const capTitle = camelToWord.charAt(0).toUpperCase() + camelToWord.slice(1)

  useEffect(() => {
    selectRef.current.scrollTop = selectRef.current.children[focus].offsetTop;
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
    <div style={{minWidth: '160px', flexGrow: 1, backgroundColor: 'var(--secondary-color)', padding: '20px'}}>
      <h3>{capTitle}</h3>
      <p>{dataset[focus].text}</p> {/* Focus display of currently selected item */}
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
          {dataset.map(({ text }, index) => <Option key={index} text={text} index={index} setFocus={setFocus} setShowList={setShowList}/>)}
        </div>
        <button className="expand-button" onClick={toggleList}></button>
      </div>
      <div className="list-controls">
        <label>
          <input class="locked-checkbox" checked={locked} type="checkbox" onChange={toggleLock}/>
          {locked ? <PadLocked style={{fill: 'red'}} /> : <PadUnlocked />}
        </label>
        <button class="dice-button" ref={buttonRef} onClick={randomizeSelection} disabled={locked}>
          <RollDice />
        </button>
      </div>
    </div>
  );
}