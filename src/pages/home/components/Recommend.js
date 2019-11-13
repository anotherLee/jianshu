import React, {Component} from 'react'
import choosed from '../../../static/recommend/choosed.png'
import copyRight from '../../../static/recommend/copyRight.png'
import study from '../../../static/recommend/study.png'
import vip from '../../../static/recommend/vip.png'
import {
  RecommendWrapper,
  ContentItem
} from '../style'

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <ContentItem url={choosed}/>
        <ContentItem url={copyRight}/>
        <ContentItem url={study}/>
        <ContentItem url={vip}/>
      </RecommendWrapper>
    )
  }
}

export default Recommend
