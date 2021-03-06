import React, {Component} from 'react'
import Article from "./components/Article"
import RecommendArticle from './components/RecommendArticle'
import {
  ArticleWrapper,
  ArticleInner
} from './style'

class Detail extends Component {
  render() {
    return (
      <ArticleWrapper>
        <ArticleInner>
          <Article/>
          <RecommendArticle />
        </ArticleInner>
      </ArticleWrapper>
    )
  }
}

export default Detail
