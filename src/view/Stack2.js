import React from 'react';

// components
import ArrowBox from '../components/ArrowBox';
// css
import "../css/Stack2.scss";

function Stack2() {
  return (
    <div id="stack">

      <ArrowBox contents="안녕하세요" />
      <ArrowBox />
      <ArrowBox />
      <ArrowBox />
      <ArrowBox />

    </div>
  )
}

export default Stack2;