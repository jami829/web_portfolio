import React from 'react';

// css
import "../css/ArrowBox.scss";

export function ArrowBox({ img, contents }) {
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

// export ArrowBox;

export function RightArrowBox({ name, img, contents }) {
  return (
    <div className="right_arrow">
      <div className="names">
        {name}
      </div>
      {/* <div className="right-division-line"></div> */}
      <div className="right_arrow_box">
        {contents}
      </div>
      <div className="right_profile_photo">
        <img src={img}></img>
      </div>
    </div>
  )
}

// export RightArrowBox;