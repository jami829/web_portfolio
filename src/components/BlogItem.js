import React, { useEffect, useLayoutEffect, useState } from 'react';

import emptyImg from "../img/a.jpg"

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

      if (description.includes("png")) {
        setImgIdx(
          description.indexOf("png")
          // description.indexOf("png") || description.indexOf("jpg") || description.indexOf("jpeg") || description.indexOf("gif")
        )
        setImgUrl(
          description.substring(srcIdx + 5, imgIdx + 3)
        )

      }
      else if (description.indexOf("gif")) {

        setImgIdx(
          description.indexOf("gif")
        )

        setImgUrl(
          description.substring(srcIdx + 5, imgIdx + 3)
        )

      }
      else if (description.indexOf("jpg")) {
        setImgIdx(
          description.indexOf("jpg")
        )
        setImgUrl(
          description.substring(srcIdx + 5, imgIdx + 3)
        )

      }
      else if (description.indexOf("jpeg")) {
        setImgIdx(
          description.indexOf("jpeg")
        )
        setImgUrl(
          description.substring(srcIdx + 5, imgIdx + 3)
        )

      }
      else {
        setImgUrl(
          emptyImg
        )
      }
    }
    else {
      setImgUrl(
        emptyImg
      )
    }
  }

  useEffect(() => {
    getImgUrl()
    // console.log("imgUrl", imgUrl)
  })



  // console.log(post.description)
  return (
    <div className="post">
      <a href={post.link} target="_blank">
        <div className="post-img">
          <img src={imgUrl} />
        </div>
        <div className="post-info">
          <strong className="post-title">
            {post.title}
          </strong>
          <p className="createdAt">{post.pubDate.substring(5, 16)}</p>
        </div>
      </a>
    </div>
  )
}

export default BlogItem;