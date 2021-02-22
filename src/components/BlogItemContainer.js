import React, { useRef, useState, useEffect } from 'react';
import { blogDatas } from '../asset/blogData'
// import BlogItem from './BlogItem';
import Temp from './Temp';
import styled from 'styled-components';

import useSlider from "../components/useSlider";

// css -> blog.scss

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;


const TOTAL_SLIDES = 8;

function BlogItemContainer() {

  let sliderArr = [1, 2, 3, 4]
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const { current } = slideRef;

  const goLeft = () => {
    setCurrentSlide(currentSlide + 100)
  }
  const goRight = () => {
    setCurrentSlide(currentSlide - 100)
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
      {currentSlide}
      <div id="item-list-inner">
        {posts.map((post, idx) => {
          if (idx <= 8) {
            return (
              <div style={{ transform: `translateX(${currentSlide}%)` }}>
                <Temp key={idx} post={post} />
              </div>
            )
          }
          return
        })}
      </div>
      <Button onClick={goLeft} id="goLeft">Previous Slide</Button>
      <Button onClick={goRight} id='goRight'>Next Slide</Button>
    </div>
  )
}


export default BlogItemContainer;