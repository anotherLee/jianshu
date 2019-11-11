import React from 'react'
import GlobalStyle from "./globalStyle"
import GlobalIcon from "./static/iconfont/iconfont"
import Header from './common/header'
import store from "./store"
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalIcon/>
      <Header/>
    </Provider>
  )
}

export default App
