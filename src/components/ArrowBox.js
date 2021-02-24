import React from 'react';

// css
import "../css/ArrowBox.scss";

function ArrowBox({ img, contents }) {
  return (
    <div className="arrow">
      <div className="profile_photo">
        <img src={img}></img>
      </div>
      <div className="arrow_box">
        {contents}
      </div>
    </div>
  )
}

export default ArrowBox;