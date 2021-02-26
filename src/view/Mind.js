import React from 'react';

// css
import '../css/Mind.scss';

// icons
import codeReview from '../img/code_review.png'
import pair from '../img/Pair.png'
import agile from '../img/agile.png'

import useScrollFadeIn from "../components/useScrollFadeIn";


function Mind() {
  return (
    <div className='mind'>
      <div className='mind-container'>

        <div className="mind-icons-box" {...useScrollFadeIn('up', 1, 0)} >
          <div className="mind-icons">
            <img className="icons" src={codeReview} alt="." />
          </div>
          <div className='contents'>
            코드리뷰
          </div>
        </div>

        <div className="mind-icons-box" {...useScrollFadeIn('up', 1, .5)}>
          <div className="mind-icons">
            <img className="icons" src={pair} alt="." />
          </div>
          <div className='contents'>
            페어 프로그래밍
          </div>
        </div>

        <div className="mind-icons-box"{...useScrollFadeIn('up', 1, 0.2)}>
          <div className="mind-icons">
            <img className="icons" src={agile} alt="." />
          </div>
          <div className='contents'>
            <p>애자일</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mind;