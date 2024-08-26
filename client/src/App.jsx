import React, { useRef } from 'react';

import { lists } from '../data';

import SelectList from './components/SelectList';


// var theme = document.documentElement.getAttribute("data-theme");
// document.documentElement.setAttribute('data-theme', theme === "light" ? "dark" : "light")

export default () => {
  const randomize = {}
  Object.keys(lists).forEach((list) => {
    randomize[list] = useRef(null)
  });

  function randomizeAll() {
    for (const button in randomize) {
      randomize[button].current.click();
    }
  }

  return (
    <>
      <header style={{display: 'flex', justifyContent: 'center'}}>
        <iframe style={{height: '600px', aspectRatio: '16/9'}} src="https://www.youtube.com/embed/WRnn-bhv-AE?si=nxaEW8Kwoj4xj9G0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </header> {/* https://youtu.be/WRnn-bhv-AE?si=7xwMAQq2pmhl0Hrr */}
      <div style={{display: 'grid', gap: '20px', gridTemplateColumns: '120px repeat(5, 1fr) 120px'}}>
        <div className="bookend"></div>
        {Object.keys(lists).map((key, index) => {
          return <SelectList key={index} title={key} dataset={lists[key]} buttonRef={randomize[key]}/>
        })}
        <div className="bookend">
          <button onClick={randomizeAll}>
            Randomize All
          </button>
        </div>
      </div>
    </>
  );
}