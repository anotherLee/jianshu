import React, { Component } from 'react'
import MainList from "./components/MainList"
import Recommend from "./components/Recommend"
import Writer from './components/Writer'
import {
  HomeWrapper
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <MainList/>
        <div className="homeRight">
          <Recommend/>
          <Writer/>
        </div>
      </HomeWrapper>
    )
  }
}

export default Home
