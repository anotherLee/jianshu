import React from 'react'
import GlobalStyle from "./globalStyle"
import GlobalIcon from "./static/iconfont/iconfont"
import Header from './common/header'
import Home from "./pages/home"
import Detail from "./pages/detail"
import RegisterLogin from "./pages/RegisterLogin"
import store from "./store"
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalIcon/>
      <BrowserRouter>
        <Header/>
        <Route path='/jianshu/build' exact component={Home} />
        <Route path='/jianshu/build/detail/:id' exact component={Detail} />
        <Route path='/jianshu/build/signLogin' component={RegisterLogin} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
