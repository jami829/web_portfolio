import React, { useRef, useState, useEffect } from 'react';
import { blogDatas } from '../asset/blogData'
// import BlogItem from './BlogItem';
import Temp from './Temp';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import useSlider from "../components/useSlider";

// css -> blog.scss

// const Button = styled.button`
//   all: unset;
//   border: 1px solid coral;
//   padding: 0.5em 2em;
//   color: coral;
//   border-radius: 10px;
//   &:hover {
//     transition: all 0.3s ease-in-out;
//     background-color: coral;
//     color: #fff;
//   }
// `;


const TOTAL_SLIDES = 8;

function BlogItemContainer() {

  // let sliderArr = [1, 2, 3, 4]
  const [currentSlide, setCurrentSlide] = useState(0);

  // 이동 & 더이상 이동할 곳 없으면 초기화하여 다시 처음부터 돌게.
  const goLeft = () => {
    currentSlide === 0 ? setCurrentSlide(-100 * (TOTAL_SLIDES)) : setCurrentSlide(currentSlide + 100)
  }
  const goRight = () => {
    currentSlide === -100 * (TOTAL_SLIDES) ? setCurrentSlide(0) : setCurrentSlide(currentSlide - 100)
  }


  // 다이렉트 이동
  const moveToSlide1 = () => {
    setCurrentSlide(0)
  }
  const moveToSlide2 = () => {
    setCurrentSlide(-100)
  }
  const moveToSlide3 = () => {
    setCurrentSlide(-200)
  }
  const moveToSlide4 = () => {
    setCurrentSlide(-300)
  }
  const moveToSlide5 = () => {
    setCurrentSlide(-400)
  }
  const moveToSlide6 = () => {
    setCurrentSlide(-500)
  }
  const moveToSlide7 = () => {
    setCurrentSlide(-600)
  }
  const moveToSlide8 = () => {
    setCurrentSlide(-700)
  }
  const moveToSlide9 = () => {
    setCurrentSlide(-800)
  }


  // nextSlide와 prevSlide를 통해 현재 보여조는 슬라이드를 정할 수 있도록 함

  // useEffect(() => {
  //   const { current } = slideRef;
  //   // current.style.transition = "all 0.5s ease-in-out";
  //   current.style.transform = `translateX(${currentSlide}%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  // }, [currentSlide]);

  const posts = blogDatas.channel.item;
  // console.log(blogDatas)
  return (
    <div id="item-list-container">
      <div className="title-blog">CHECK SOME OF MY POSTS</div>
      <div id="item-list-inner">
        {posts.map((post, idx) => {
          if (idx <= 8) {
            return (

              <div className="blog-item-box" style={{ transform: `translateX(${currentSlide}%)` }}>
                <Temp key={idx} post={post} />
              </div>

            )
          }
          return
        })}
        <button onClick={goLeft} id="goLeft">
          <FaAngleLeft />
        </button>
        <button onClick={goRight} id='goRight'>
          <FaAngleRight />
        </button>
      </div>
      <div className="moveDirect">
        {currentSlide === 0
          ? <div className="cycle" onClick={moveToSlide1} />
          : <div className="not-here" onClick={moveToSlide1} />
        }
        {currentSlide === -100
          ? <div className="cycle" onClick={moveToSlide2} />
          : <div className="not-here" onClick={moveToSlide2} />
        }
        {currentSlide === -200
          ? <div className="cycle" onClick={moveToSlide3} />
          : <div className="not-here" onClick={moveToSlide3} />
        }
        {currentSlide === -300
          ? <div className="cycle" onClick={moveToSlide4} />
          : <div className="not-here" onClick={moveToSlide4} />
        }
        {currentSlide === -400
          ? <div className="cycle" onClick={moveToSlide5} />
          : <div className="not-here" onClick={moveToSlide5} />
        }
        {currentSlide === -500
          ? <div className="cycle" onClick={moveToSlide6} />
          : <div className="not-here" onClick={moveToSlide6} />
        }
        {currentSlide === -600
          ? <div className="cycle" onClick={moveToSlide7} />
          : <div className="not-here" onClick={moveToSlide7} />
        }
        {currentSlide === -700
          ? <div className="cycle" onClick={moveToSlide8} />
          : <div className="not-here" onClick={moveToSlide8} />
        }
        {currentSlide === -800
          ? <div className="cycle" onClick={moveToSlide9} />
          : <div className="not-here" onClick={moveToSlide9} />
        }

      </div>
    </div>
  )
}


export default BlogItemContainer;