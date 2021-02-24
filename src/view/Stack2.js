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
          <ArrowBox img={react} contents="안녕하세요" />
        </div>
        <div {...useScrollFadeIn('left', 1, .3)} >
          <ArrowBox img={redux} contents="redux" />
        </div>
        <div {...useScrollFadeIn('left', 1, .5)}>
          <ArrowBox img={vue} contents="vue" />
        </div>
        <div {...useScrollFadeIn('left', 1, .8)}>
          <ArrowBox img={ts} contents="타입스크립트" />
        </div>
        <div {...useScrollFadeIn('left', 1, 1)}>
          <RightArrowBox img={me} contents="나dd" />
        </div>
      </div>
    </div>

  )
}

export default Stack2;