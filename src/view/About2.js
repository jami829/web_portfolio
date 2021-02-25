import React, { useEffect, useRef, useState } from 'react';

//css
import "../css/About2.scss";

//img
import profileImg from "../img/profile.jpg";

//animation
import useScrollFadeIn from "../components/useScrollFadeIn";
import useScrollAnimation from "../components/useScrollAnimation";

function About2() {

  return (
    <div className="About">
      {/* <div className="about-inner" ref={aboutLocation}> */}
      <div className="about-inner">
        <div className="about-title">
          <h1 className="head" {...useScrollFadeIn('up', 1, 0.2)}>About</h1>
          <div className="profile-img">
            <img src={profileImg} alt="프로필 사진"></img>
          </div>
        </div>
        <div className="introduce-container">
          <div className="introduce-box1">

            {/* <h1 {...useScrollFadeIn('up', 1, 0.2)}>About</h1> */}

            <div className='about-contents'>
              <p {...useScrollFadeIn('up', 1, 0.2)}>안녕하세요. 주니어 프론트엔드 개발자 <span>이재훈</span>입니다.</p>
              <p {...useScrollFadeIn('up', 1, 0.3)}>저는 코드스테이츠 부트캠프에서 팀원과의 <u>협업</u>, <u>코드리뷰</u> 등으로 <u>페어 프로그래밍</u> 기반 과제 진행과 2번의 협업 프로젝트를 진행했습니다.
              사용자 입장에서 개발하는 것을 지향하여 계속 고민하고 더 나은 방향에 대해 팀원들과 소통하는 것을 중요시합니다.</p>
              <p {...useScrollFadeIn('up', 1, 0.4)}>또한 자기 개발 및 계발을 좋아합니다. 늘 새로운 stack에 대한 호기심을 갖고 스터디를 하고 있습니다.
                이렇게 좋아하고 즐기다보니, 앞으로 더 성장했을 제 모습을 상상히니 무척 설레기도 합니다. <br />
              사용자가 오래 머무를 수 있는 web을 개발하고 싶은 개발자, 더 나은 내일을 위해 노력하는 프론트엔드 개발자가 제 목표입니다.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2;