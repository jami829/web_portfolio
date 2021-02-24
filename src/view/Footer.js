import React from 'react';

// css
import '../css/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="email">jami8291215@gmail.com</p>
        <p className="msg">빠른 시일 내로 답변드리겠습니다 :)</p>
        <div className="link">
          <span><a href="https://github.com/jami829" target="_blank">Github</a></span>
          <span><a href="https://velog.io/@potter" target="_blank">Blog</a></span>
          <span><a href="https://drive.google.com/file/d/1yXY9wmUrOBVx3t1VoflJe_Z4hhrQvE4s/view?usp=sharing" target="_blank">Resume</a></span>

        </div>
      </div>
    </div>
  )
}

export default Footer;