import React, { useEffect, useLayoutEffect, useState } from 'react';

// css
import "../css/BlogItem.scss";

const BlogItem = ({ post }) => {

  const [srcIdx, setSrcIdx] = useState("")
  const [imgIdx, setImgIdx] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  const description = post.description;

  // const getSrcIdx = () => {
  //   if (description.includes("src")) {
  //     setSrcIdx(
  //       description.indexOf("src")
  //     )
  //     console.log("srcIdx", srcIdx)
  //   }
  //   else {
  //     console.log("no img")
  //   }
  // }

  // const getImgIdx = () => {
  //   if (description.includes("png") || description.includes("jpg") || description.includes("jpeg")) {
  //     setImgIdx(

  //       description.indexOf("png") || description.indexOf("jpg") || description.indexOf("jpeg")
  //     )
  //     console.log("imgIdx", imgIdx)
  //   }
  // }

  // useEffect(() => {
  //   getSrcIdx()
  //   getImgIdx()
  // })


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