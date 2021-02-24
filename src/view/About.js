import React, { useEffect, useRef, useState } from 'react';

//css
import "../css/About.scss";

//img
import profileImg from "../img/profile.jpg";

//animation
import useScrollFadeIn from "../components/useScrollFadeIn";
import useScrollAnimation from "../components/useScrollAnimation";

function About() {

  return (
    <div className="About">
      {/* <div className="about-inner" ref={aboutLocation}> */}
      <div className="about-inner">
        <div className="profile-img">
          <img src={profileImg} alt="프로필 사진"></img>
        </div>

        <div className="introduce-container">
          <div className="introduce-box1">

            <h1 {...useScrollFadeIn('up', 1, 0.2)}>About</h1>

            <div>
              <p>
                <div className="introduce1" ref="aboutLocation1" {...useScrollAnimation()}>
                안녕하세요 :)
                </div>
              {/* <div> */}
                <div className="introduce2" ref="aboutLocation2" {...useScrollAnimation()}>
                주니어 프론트엔드 개발자 <span>이재훈</span>입니다.
                </div>
              {/* </div> */}
              </p>
              <p>
                <div className="introduce3" ref="aboutLocation3" {...useScrollAnimation()}>
                저는 코드스테이츠 부트캠프에서 팀원과의 <u>협업</u>, <u>코드리뷰</u> 등으로
                </div>
                <div className="introduce4" ref="aboutLocation4" {...useScrollAnimation()}>
                <u>페어 프로그래밍</u> 기반 과제 진행과 2번의 협업 프로젝트를 진행했습니다.
                </div>
              </p>

              <p>
                <div className="introduce5" ref="aboutLocation5" {...useScrollAnimation()}>
                모든 순간이 도전이고, 좌절하는 순간이 많겠지만
                
                지난날의 값진 경험을 토대로 끈질기게 붙잡아
                </div>
                <div className="introduce6" ref="aboutLocation6" {...useScrollAnimation()}>
                끝끝내 최선의 웹 서비스를 구현해내는 개발자,

                항상 사용자가 오래 머무를 수 있도록
                </div>
                <div className="introduce7" ref="aboutLocation7" {...useScrollAnimation()}>
                web 서비스에 대해 적극적으로 연구하는 <span>프론트엔드 개발자</span>가 되고 싶습니다.
                </div>
              </p>
            </div>

            <div className="introduce-box2">
              <h1 {...useScrollFadeIn('up', 1, 1)}>
                Contact
              </h1>
              <p {...useScrollFadeIn('up', 1, 0.5)}>이재훈</p>
              <p {...useScrollFadeIn('up', 1, 0.5)}>jami8291215@gmail.com</p>
              <p {...useScrollFadeIn('up', 1, 0.5)}>010-8751-3371</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;