import React from 'react';
import BlogItemContainer from '../components/BlogItemContainer';

// css
import "../css/Blog.scss";

// data
import { blogDatas } from '../asset/blogData';

function Blog() {
  // console.log("blogDatas", blogDatas)



  return (
    <div className="blog">
      <p>블로그 포스트 게시</p>
      <BlogItemContainer />

    </div>
  )
}

export default Blog;