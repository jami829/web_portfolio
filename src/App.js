import React from 'react';

//css
import './css/App.scss';
import { blogDatas } from './asset/blogData'

// components

import Main from "./view/Main";

function App() {

  console.log(blogDatas)
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
