import React from 'react';

// css
import "../css/Stack.scss";

function Stack() {
  return (
    <div className="Stack">
      <div className="stack_overlay"></div>
      <div className="stack_contents">
        <div className="stack_inner">
          <div className="stack_title">저는 이러한 스택을 사용합니다.</div>
        </div>
      </div>
    </div>
  )
}

export default Stack;