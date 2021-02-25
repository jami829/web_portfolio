import React from 'react';


// components
import { ArrowBox, RightArrowBox } from '../components/Reply';
import useScrollFadeIn from '../components/useScrollFadeIn'
// import RightArrowBox from '../components/ArrowBox';
// css
import "../css/Stack2.scss";

// img 
import cloudFront from "../img/stack/cloudFront.png"
import css from "../img/stack/css.png"
import ec2 from "../img/stack/ec2.png"
import express from "../img/stack/express.png"
import html from "../img/stack/html.png"
import js from "../img/stack/js.png"
import mysql from "../img/stack/mysql.png"
import nodejs from "../img/stack/nodejs.png"
import react from "../img/stack/react.png"
import redux from "../img/stack/redux.png"
import s3 from "../img/stack/s3.png"
import scss from "../img/stack/scss.png"
import ts from "../img/stack/type.png"
import vue from "../img/stack/vue.png"
import me from "../img/profile.jpg"


// icons
import { ImQuotesLeft } from "react-icons/im";


function Stack2() {
  return (
    <div id="stack">
      <div className="arrowbox-container" >
        {/* <div className="arrowbox-container" {...useScrollFadeIn('up', 1, 1)}> */}

        <div className="stack-title">
          <div className="title-icons">
            <ImQuotesLeft />
          </div>
          <div className='title-contents'>
            Stack을 소개합니다.
          </div>
        </div>
        <div className='arrow-contents'>

          <div id="arrow1"  {...useScrollFadeIn('up', 1, 0)}>
            <ArrowBox img={react} contents="🥰" />
          </div>
          <div id="arrow2" {...useScrollFadeIn('up', 1, .3)} >
            <ArrowBox img={redux} contents="😎" />
          </div>
          <div id="arrow3" {...useScrollFadeIn('up', 1, .5)}>
            <ArrowBox img={vue} contents="🤩" />
          </div>
          <div id="arrow4" {...useScrollFadeIn('up', 1, .8)}>
            <ArrowBox img={ts} contents="😊" />
          </div>
          <div id="arrow5" {...useScrollFadeIn('up', 1, .8)}>
            <ArrowBox img={html} contents="😌" />
          </div>
          <div id="arrow6" {...useScrollFadeIn('up', 1, .3)}>
            <ArrowBox img={scss} contents="😍" />
          </div>
          <div id="arrow7" {...useScrollFadeIn('up', 1, .8)}>
            <ArrowBox img={s3} contents="🤗" />
          </div>
          <div id="arrow8" {...useScrollFadeIn('up', 1, .6)}>
            <ArrowBox img={cloudFront} contents="" />
          </div>
          <div id="arrow9" {...useScrollFadeIn('up', 1, .8)}>
            <ArrowBox img={css} contents="" />
          </div>
          <div id="arrow10" {...useScrollFadeIn('up', 1, .3)}>
            <ArrowBox img={express} contents="" />
          </div>
          <div id="arrow11" {...useScrollFadeIn('up', 1, .8)}>
            <ArrowBox img={js} contents="" />
          </div>
          <div id="arrow12" {...useScrollFadeIn('up', 1, .2)}>
            <ArrowBox img={ec2} contents="" />
          </div>
          <div id="arrow13" {...useScrollFadeIn('up', 1, .8)}>
            <ArrowBox img={mysql} contents="" />
          </div>
          <div id="arrow14" {...useScrollFadeIn('up', 1, .5)}>
            <ArrowBox img={nodejs} contents="" />
          </div>
          {/* <div id="arrow15" {...useScrollFadeIn('up', 1, 1)}>
            <RightArrowBox img={me} contents="나dd" />
          </div> */}
        </div>
      </div>
    </div>

  )
}

export default Stack2;