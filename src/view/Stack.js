import React, { useEffect } from 'react';

// css
import "../css/Stack.scss";

// component
import useScrollFadeIn from "../components/useScrollFadeIn";

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
import ts from "../img/stack/ts.png"
import vue from "../img/stack/vue.png"






function Stack() {

  // const saTriggerMargin = 300;
  // const saElementList = document.querySelectorAll('.sa')
  // const saElementListArr = Array.from('saElementList')

  // const saFunc = function() {
  //   for (const element of saElementListArr) {
  //     if (!element.classList.contains('show')) {
  //       if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
  //         element.classList.add('show');
  //       }
  //     }
  //   }
  // }



  // useEffect(() => {
  //   window.addEventListener('load', saFunc)
  //   window.addEventListener('scroll', saFunc)
  // }, [])

  return (
    <div className="Stack">
      <div className="stack_contents">
        <div className="stack_inner">
          <div className="stack_title">
            <div>
              <span {...useScrollFadeIn('up', 2, 1.5)}>
                저는 이러한 스택을 사용합니다.
              </span>
            </div>
          </div>
          <div className="stack_box">
            <div className="sa up">
              <img src={react} alt="dd" />
              <div className="stack_text" >
                <div>
                  # 리액트
                </div>
                <div>
                  # React-hooks
                </div>
              </div>
            </div>
            <div className="sa up">
              <img src={vue} alt="dd" />
              <div className="stack_text">
                <div>
                  # Vue.js
                </div>
                <div>
                  # Vuex
                </div>
              </div>
            </div>
            <div className="sa up">
              <img src={redux} alt="dd" />
              <div className="stack_text">
                # Redux
              </div>
            </div>
            <div className="sa up">
              <img src={scss} alt="dd" />
              <div className="stack_text">
                # SCSS
              </div>
            </div>
            <div className="sa up">
              <img src={css} alt="dd" />
              <div className="stack_text">
                # CSS
              </div>
            </div>
            <div className="sa up">
              <img src={html} alt="dd" />
              <div className="stack_text">
                # HTML
              </div>
            </div>
          </div>
          <div className="stack_box">
            <div className="sa up">
              <img src={js} alt="dd" />
              <div className="stack_text">
                # JavaScript
              </div>
            </div>
            <div className="sa up">
              <img src={ts} alt="dd" />
              <div className="stack_text">
                # TypeScript
              </div>
            </div>
            <div className="sa up">
              <img src={mysql} alt="dd" />
              <div className="stack_text">
                <div>
                  # MySQL
                </div>
                <div>
                  # DB
                </div>
              </div>
            </div>
            <div className="sa up">
              <img src={express} alt="dd" />
              <div className="stack_text">
                # Express.js
              </div>
            </div>
            <div className="sa up">
              <img src={nodejs} alt="dd" />
              <div className="stack_text">
                # node.js
              </div>
            </div>
          </div>
          <div className="stack_box">
            <div className="sa up">
              <img src={s3} alt="dd" />
              <div className="stack_text">
                <div>
                  # AWS
                </div>
                <div>
                  # S3
                </div>
              </div>
            </div>
            <div className="sa up">
              <img src={ec2} alt="dd" />
              <div className="stack_text">
                <div>
                  # AWS
                </div>
                <div>
                  # EC2
                </div>
              </div>
            </div>
            <div className="sa up">
              <img src={cloudFront} alt="dd" />
              <div className="stack_text">
                <div>
                  # AWS
                </div>
                <div>
                  # cloudFront
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Stack;