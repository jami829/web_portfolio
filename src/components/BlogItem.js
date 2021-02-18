import React from 'react';

const BlogItem = ({ post }) => {
  console.log(post.description)
  return (

    <div className="post">
      <div className="post-img">
        backgroundimg로 해결하기
      </div>
      <div className="post-info">
        <strong className="post-title">타이틀</strong>
        <p>created_at</p>
      </div>
    </div>
  )
}

export default BlogItem;