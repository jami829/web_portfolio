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
            <p className="content-title">코드 리뷰</p>
            <p className='content-sub'>
              {/* 서로의 피드백으로 <br /> */}
              코드 실수 조기 발견, <br />
              개발 표준 통일화 등 <br />
              팀원과의 호흡을 지향합니다.<br />
            </p>
          </div>
        </div>

        <div className="mind-icons-box middle" {...useScrollFadeIn('up', 1, .5)}>
          <div className="mind-icons">
            <img className="icons" src={pair} alt="." />
          </div>
          <div className='contents'>
            <p className="content-title">페어 프로그래밍</p>
            <p className='content-sub'>
              최적의 솔루션, 버그 감소 <br />
              효율성 및 집중력 증가를 도와주는 <br />
              페어 프로그래밍을 선호합니다.
            </p>
          </div>
        </div>

        <div className="mind-icons-box"{...useScrollFadeIn('up', 1, 0.2)}>
          <div className="mind-icons">
            <img className="icons" src={agile} alt="." />
          </div>
          <div className='contents'>
            <p className="content-title">애자일</p>
            <p className='content-sub'>
              {/* 폭포수 개발 방식이 아닌   <br /> */}
              개발과정의 효율성,<br />
              {/* 사용자 만족도를 고려한<br /> */}
              작은 단위의 목표를 성취하는  <br />
              '애자일'을 지향합니다.<br />

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mind;