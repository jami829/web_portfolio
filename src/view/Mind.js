import React from 'react';

// css
import '../css/Mind.scss';

// icons
import codeReview from '../img/code_review.png'
import pair from '../img/Pair.png'
import agile from '../img/agile.png'

function Mind() {
  return (
    <div className='mind'>
      <div className='mind-container'>

        <div className="mind-icons-box">
          <div className="mind-icons">
            <img src={codeReview} alt="." />
          </div>
          <div className='contents'>
            코드리뷰
          </div>
        </div>

        <div className="mind-icons-box">
          <div className="mind-icons">
            <img src={pair} alt="." />
          </div>
          <div className='contents'>
            페이프로그래밍
          </div>
        </div>

        <div className="mind-icons-box">
          <div className="mind-icons">
            <img src={agile} alt="." />
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