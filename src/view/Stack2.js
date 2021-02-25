import React from 'react';


// components
import { ArrowBox, RightArrowBox } from '../components/ArrowBox';
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


function Stack2() {
  return (
    <div id="stack">
      <div className="arrowbox-container" >
        {/* <div className="arrowbox-container" {...useScrollFadeIn('up', 1, 1)}> */}

        <div  {...useScrollFadeIn('left', 1, 0)}>
          <ArrowBox img={react} contents="class 컴포넌트와 functional 컴포넌트를 hooks로 다룰 줄 알더라구요!" />
        </div>
        <div {...useScrollFadeIn('left', 1, .3)} >
          <ArrowBox img={redux} contents="제 집 드나들듯이 너무 자주 와요.." />
        </div>
        <div {...useScrollFadeIn('left', 1, .5)}>
          <ArrowBox img={vue} contents="React랑 너무 친해서 질투가 났지만, 요즘에 많이 친해졌어요! Vuex도요!" />
        </div>
        <div {...useScrollFadeIn('left', 1, .8)}>
          <ArrowBox img={ts} contents="" />
        </div>
        <div {...useScrollFadeIn('left', 1, 1)}>
          <RightArrowBox img={me} contents="나dd" />
        </div>
      </div>
    </div>

  )
}

export default Stack2;