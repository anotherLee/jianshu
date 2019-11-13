import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ListWrapper,
  ArticleList,
  Article,
  BottomButton,
  NoData
} from '../style'
import {createGetListAction, createReadMoreAction} from '../store/actionCreators'
import {Link} from 'react-router-dom'

class MainList extends Component {
  renderArticleItem() {
    const { list } = this.props
    const jsList = list.toJS()
    return jsList.map(item => {
      return (
        <Article key={item.id}>
          <div className="article-main">
            <div className="article-title">
              <Link to='/detail'>{item.title}</Link>
            </div>
            <div className="article-desc">{item.description}</div>
            <div className="article-info">
              <span className="article-star">
                <i className="iconfont star">&#xe659;</i>
                {item.star}
              </span>
              <span className="article-author">{item.author}</span>
              <span className="article-like">
                <i className="iconfont like">&#xe672;</i>
                {item.like}
              </span>
            </div>
          </div>
          {item.imgUrl ? <img src={item.imgUrl} alt="" className="article-photo"/> : null}
        </Article>
      )
    })
  }

  render() {
    const { list, readMore } = this.props
    return (
      <ListWrapper>
        <a target='_blank' rel="noopener noreferrer" href="http://product.dangdang.com/28471013.html">
          <img className='banner' src="https://i.loli.net/2019/11/12/4b81zwta7PqrHgL.jpg" alt=""/>
        </a>
        <ArticleList>
          {this.renderArticleItem()}
        </ArticleList>
        {
          list.size >= 15
            ? <NoData>没有更多了</NoData>
            : <BottomButton onClick={e => readMore()}>阅读更多</BottomButton>
        }

      </ListWrapper>
    )
  }

  componentDidMount() {
    this.props.getArticleList()
  }

}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList() {
      dispatch(createGetListAction())
    },
    readMore() {
      dispatch(createReadMoreAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList)
