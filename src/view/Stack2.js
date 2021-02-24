import React from 'react';

// components
import ArrowBox from '../components/ArrowBox';
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

function Stack2() {
  return (
    <div id="stack">
      <div className="arrowbox-container">``

        <ArrowBox img={react} contents="안녕하세요" />
        <ArrowBox img={redux} contents="redux" />
        <ArrowBox img={vue} contents="vue" />
        {/* <ArrowBox img={} contents="vuex" /> */}
        <ArrowBox img={ts} contents="타입스크립트" />

      </div>
    </div>
  )
}

export default Stack2;