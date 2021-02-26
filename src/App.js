import React from 'react';

//css
import './css/App.scss';

// components

import Main from "./view/Main";

function App() {


  console.log('%c 안녕하세요! 이재훈 입니다 :) ', 'color:white; font-size:30px; background: black')
  console.log('%c 개발에 대한 열정은 뛰어납니다! ', 'color:white; font-size:30px; background: black')
  console.log('%c 좋은 인연이 되어 같이 성장했으면 해요ㅎㅎ ', 'color:white; font-size:30px; background: black')
  console.log('%c 잘 부탁드립니다 :-) ', 'color:white; font-size:30px; background: black')


  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
