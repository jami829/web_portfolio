import React from 'react';

// css
import "../css/ArrowBox.scss";

function ArrowBox({ contents }) {
  return (
    <div className="arrow_box">
      { contents}
    </div>
  )
}

export default ArrowBox;