import React, {Component} from 'react'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'
import {connect} from 'react-redux'
import {createGetListAction} from '../../home/store/actionCreators'

class RecommendArticle extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      distance: 0
    }
  }
  render() {
    const list = this.props.recommendList.toJS()
    return (
      <RecommendWrapper ref={dom => this.wrapper = dom}>
        <div className="title">推荐阅读</div>
        {
          list.map(item => {
            return (
              <RecommendItem key={item.id}>
                <div className="recommend-title">{item.title}</div>
                <div className='info'>
                  喜欢 {item.like}
                </div>
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
  handleScroll() {
    const scrollTop = document.documentElement.scrollTop
    if (this.state.distance === 0) {
      const left = this.wrapper.getBoundingClientRect().left
      this.setState({
        distance: left
      })
    } else {
      if (scrollTop > 56) {
        this.wrapper.style.position = 'fixed'
        this.wrapper.style.top = '10px'
        this.wrapper.style.left = this.state.distance + 'px'
      } else {
        this.wrapper.style.position = 'absolute'
        this.wrapper.style.top = '10px'
        this.wrapper.style.left = '740px'
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.props.getRecommend()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecommend() {
      dispatch(createGetListAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendArticle)
