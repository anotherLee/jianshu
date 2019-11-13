import React from 'react'
import GlobalStyle from "./globalStyle"
import GlobalIcon from "./static/iconfont/iconfont"
import Header from './common/header'
import Home from "./pages/home"
import Detail from "./pages/detail"
import store from "./store"
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalIcon/>
      <BrowserRouter>
        <Header/>
        <Route path='/jianshu/build' exact>
          <Home />
        </Route>
        <Route path='/jianshu/build/detail' exact>
          <Detail />
        </Route>
      </BrowserRouter>
    </Provider>
  )
}

export default App
