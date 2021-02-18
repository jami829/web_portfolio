import React, { useEffect, useLayoutEffect, useState } from 'react';

// css -> blog.scss


const BlogItem = ({ post }) => {

  const [srcIdx, setSrcIdx] = useState("")
  const [imgIdx, setImgIdx] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  const description = post.description;

  const getImgUrl = () => {
    if (description.includes("src")) {
      setSrcIdx(
        description.indexOf("src")
      )
      if (description.includes("png") || description.includes("jpg") || description.includes("jpeg")) {
        setImgIdx(
          description.indexOf("png") || description.indexOf("jpg") || description.indexOf("jpeg") || description.indexOf("gif")
        )
        setImgUrl(
          description.substring(srcIdx + 5, imgIdx + 3)
        )
      }
    }
    else {
      setImgUrl(
        "no img"
      )
    }
  }

  useEffect(() => {
    getImgUrl()
    console.log("imgUrl", imgUrl)
  })



  // console.log(post.description)
  return (


    <div className="post">
      <div className="post-img">
        <img src={imgUrl} />
      </div>
      <div className="post-info">
        <strong className="post-title">타이틀</strong>
        <p>created_at</p>
      </div>
    </div>
  )
}

export default BlogItem;