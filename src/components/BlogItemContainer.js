import React from 'react';
import { blogDatas } from '../asset/blogData'
import BlogItem from './BlogItem';

function BlogItemContainer() {
  const posts = blogDatas.channel.item;
  console.log(blogDatas)
  return (
    <div id="item-list-container">
      { posts.map((post, idx) => {
        if (idx < 10) {
          return <BlogItem key={idx} post={post} />
        }
        return
      })}

    </div>
  )
}


export default BlogItemContainer;