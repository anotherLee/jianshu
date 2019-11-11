import React from 'react';
import GlobalStyle from "./globalStyle"
import GlobalIcon from "./static/iconfont/iconfont"
import Header from './common/header'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalIcon />
      <Header />
    </React.Fragment>
  );
}

export default App;
