import React, {Component} from 'react'
import choosed from '../../../static/recommend/choosed.png'
import copyRight from '../../../static/recommend/copyRight.png'
import study from '../../../static/recommend/study.png'
import vip from '../../../static/recommend/vip.png'
import {
  RecommendWrapper,
  ContentItem
} from '../style'
import {message} from 'antd'

class Recommend extends Component {
  handleClick() {
    message.warning('该功能暂未开放!', 2)
  }
  render() {
    return (
      <RecommendWrapper>
        <ContentItem url={choosed} onClick={ this.handleClick }/>
        <ContentItem url={copyRight} onClick={ this.handleClick }/>
        <ContentItem url={study} onClick={ this.handleClick }/>
        <ContentItem url={vip} onClick={ this.handleClick }/>
      </RecommendWrapper>
    )
  }
}

export default Recommend
