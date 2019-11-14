import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createGetArticleAction} from "./store/actionCreators"
import {
  ArticleWrapper
} from './style'

class Detail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {article} = this.props
    const jsArticle = article.toJS()
    console.log(jsArticle)
    return (
      <ArticleWrapper>
        <div className="article">
          <div className="article-title">{jsArticle.title}</div>
          <div className="article-info">
            <div className='avatar'><img src={jsArticle.avatar} alt=""/></div>
            <div className="info">
              <div className="author-info">
                <span className='author-name'>{jsArticle.author}</span>
                <span className='badge'>
                  <img src={jsArticle.badge} alt=""/>
                </span>
              </div>
              <div className="article-detail">
                <i className='iconfont starIcon'>&#xe659;</i>
                <span className="star">{jsArticle.star}</span>
                <span className='time'>{jsArticle.time}</span>
                <span className='counts'>字数 {jsArticle.counts}</span>
                <span className='read'>阅读 {jsArticle.read}</span>
              </div>
            </div>
          </div>
          <div className="article-content" dangerouslySetInnerHTML={{__html: jsArticle.content}}/>
        </div>
      </ArticleWrapper>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    const id = this.props.match.params.id
    this.props.getArticle(id)
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.getIn(['detail', 'article'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle(id) {
      dispatch(createGetArticleAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
