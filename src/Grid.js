import React from 'react';
import './style.css';
import { useState } from 'react';

export default function Grid() {
  const [select, setSelect] = useState([]);
  const [lastPlay, setLastPlay] = useState('X');

  function changeSelection() {
    let arr = [];
    arr.length = 9;

    console.log(event.target.id);
    //id="0"
    if (lastPlay == 'X') {
      select[parseInt(event.target.id)] = 'O';

      // setSelect(...select, select.push(arr));

      console.log('arr', arr);
      console.log('select', select);
      setLastPlay('O');
    } else {
      //setSelect('X');
      select[parseInt(event.target.id)] = 'X';
      setLastPlay('X');
    }
  }
  // 0 1 2
  // 3 4 5
  // 6 7 8 

  return (
    <div>
      <button id="0" onClick={changeSelection}>
        {select[0]}
      </button>
      <button id="1" onClick={changeSelection}>
        {select[1]}
      </button>
      <button id="2" onClick={changeSelection}>
        {select[2]}
      </button>
      <br />
      <button id="3" onClick={changeSelection}>
        {select[3]}
      </button>
      <button id="4" onClick={changeSelection}>
        {select[4]}
      </button>
      <button id="5" onClick={changeSelection}>
        {select[5]}
      </button>
      <br />
      <button id="6" onClick={changeSelection}>
        {select[6]}
      </button>
      <button id="7" onClick={changeSelection}>
        {select[7]}
      </button>
      <button id="8" onClick={changeSelection}>
        {select[8]}
      </button>
    </div>
  );
}
