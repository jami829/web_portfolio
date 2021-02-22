import React, { useRef, useState, useEffect } from 'react';
import { blogDatas } from '../asset/blogData'
// import BlogItem from './BlogItem';
import Temp from './Temp';
import styled from 'styled-components';

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // nextSlide와 prevSlide를 통해 현재 보여조는 슬라이드를 정할 수 있도록 함

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {  // 더 이상 넘어갈 슬라이드가 없으면 슬라이드 초기화
      setCurrentSlide(0);
    }
    else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    }
    else {
      setCurrentSlide(setCurrentSlide(currentSlide - 1))
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  const posts = blogDatas.channel.item;
  console.log(blogDatas)
  return (
    <div id="item-list-container">
      <div id="item-list-inner" ref={slideRef}>

        {posts.map((post, idx) => {
          if (idx < 9) {
            // return <BlogItem key={idx} post={post} />
            return <Temp key={idx} post={post} />
          }
          return
        })}
      </div>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </div>
  )
}


export default BlogItemContainer;