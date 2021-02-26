import React, { useEffect, useState, useRef } from 'react';

// css
import "../css/Stack.scss";

// component
import useScrollFadeIn from "../components/useScrollFadeIn";
import useScrollAnimation from "../components/useScrollAnimation";

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

  const [stacks, setStacks] = useState(['React (hooks)', 'Vue.js', 'Redux', 'Vuex', 'Type-Script', 'SCSS'])
  const typed = useRef();

  let i = 0, j = 0
  const speed = 150


  const txtnum = () => {
    j === stacks.length - 1
      ? j = 0
      : j++
  }

  const typeWriter = () => {
    const { current } = typed
    return (

      i < stacks[j].length
        ? (current.innerHTML += stacks[j].charAt(i), i++, setTimeout(typeWriter, speed))
        : setTimeout(remove, 3000)
    )
  }

  const remove = () => {
    const { current } = typed
    return (

      i >= 0
        ? (current.innerHTML = current.innerHTML.slice(0, i), i--, setTimeout(remove, speed))
        : (typeWriter(), txtnum())
    )
  }

  useEffect(() => {

    // console.log("stacks", stacks)
    typeWriter()
  }, [])

  return (
    <div className="Stack">
      <div className="stack_contents">
        <div className="stack_inner">
          <div>
            <div className="stack_title">
              <div>
                <div {...useScrollAnimation()}>
                  <strong ref={typed}></strong>
                </div>
              </div>

              <div>
                개발자 입니다.
              </div>
            </div>
          </div>
          <div className="stack_box">
            <div>
              <div className="sa up" {...useScrollFadeIn('up', 1, 0.2)}>
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
              <div className="sa up" {...useScrollFadeIn('up', 1, 1)}>
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
              <div className="sa up" {...useScrollFadeIn('up', 1, 1.5)}>
                <img src={redux} alt="dd" />
                <div className="stack_text">
                  # Redux
              </div>
              </div>
              <div className="sa up" {...useScrollFadeIn('up', 1, .9)}>
                <img src={scss} alt="dd" />
                <div className="stack_text">
                  # SCSS
              </div>
              </div>
              <div className="sa up" {...useScrollFadeIn('up', 1, 1.6)}>
                <img src={css} alt="dd" />
                <div className="stack_text">
                  # CSS
              </div>
              </div>
              <div className="sa up" {...useScrollFadeIn('up', 1, .4)}>
                <img src={html} alt="dd" />
                <div className="stack_text">
                  # HTML
              </div>
              </div>
            </div>
            <div className="stack_box">
              <div className="sa up" {...useScrollFadeIn('up', 1, 1.2)}>
                <img src={js} alt="dd" />
                <div className="stack_text">
                  # JavaScript
              </div>
              </div>
              <div className="sa up" {...useScrollFadeIn('up', 1, 0.4)}>
                <img src={ts} alt="dd" />
                <div className="stack_text">
                  # TypeScript
              </div>
              </div>
              <div className="sa up" {...useScrollFadeIn('up', 1, 1)}>
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
              <div className="sa up" {...useScrollFadeIn('up', 1, 0.2)}>
                <img src={express} alt="dd" />
                <div className="stack_text">
                  # Express.js
              </div>
              </div>
              <div className="sa up" {...useScrollFadeIn('up', 1, 0.4)}>
                <img src={nodejs} alt="dd" />
                <div className="stack_text">
                  # node.js
              </div>
              </div>
            </div>
            <div className="stack_box">
              <div className="sa up" {...useScrollFadeIn('up', 1, 1.6)}>
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
              <div className="sa up" {...useScrollFadeIn('up', 1, 0.8)}>
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
              <div className="sa up" {...useScrollFadeIn('up', 1, 1.2)}>
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
    </div>


  )
}

export default Stack;