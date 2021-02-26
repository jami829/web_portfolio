import React from 'react';

// // css
import "../css/Reply.scss";

export function ReplyBox({ img, contents, name }) {
  return (
    <div className="reply">
      <div className="reply-card">
        <div className="reply-title">
          <div className="reply_profile_photo">
            <img src={img}></img>
          </div>
          <div className="reply-name">
            {name}
          </div>
        </div>

        <div className="division" />

        <div className="reply_box">
          {contents}
        </div>
      </div>
    </div>
  )
}

// export ArrowBox;

export function RightArrowBox({ name, img, contents }) {
  return (
    <div className="right_reply">
      <div className="names">
        {name}
      </div>
      {/* <div className="right-division-line"></div> */}
      <div className="right_reply_box">
        {contents}
      </div>
      <div className="right_reply_profile_photo">
        <img src={img}></img>
      </div>
    </div>
  )
}

// export RightArrowBox;