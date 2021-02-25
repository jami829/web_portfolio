import React from 'react';

// components
import { ReplyBox, RightReplyBox } from '../components/Reply';
import useScrollFadeIn from '../components/useScrollFadeIn'

// css
import "../css/Stack3.scss";

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


function Stack3() {
  return (
    <div className='stack3'>
      <div className="stack3-container" >


        <div className="stack3-title">

        </div>
        <div className='stack3-contents'>

          <div id="arrow1"  {...useScrollFadeIn('left', 1, .5)}>
            <ReplyBox img={react} name='React' contents="🥰" />
          </div>
          <div id="arrow2" {...useScrollFadeIn('left', 1, .3)} >
            <ReplyBox img={redux} name='Redux' contents="😎" />
          </div>
          <div id="arrow3" {...useScrollFadeIn('left', 1, .5)}>
            <ReplyBox img={vue} name='Vue, Vuex' contents="🤩" />
          </div>
          <div id="arrow4" {...useScrollFadeIn('left', 1, .8)}>
            <ReplyBox img={ts} name='Type-script' contents="😊" />
          </div>

          {/* <div id="arrow15" {...useScrollFadeIn('up', 1, 1)}>
            <RightReplyBox img={me} contents="나dd" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Stack3;