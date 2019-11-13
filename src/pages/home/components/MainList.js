import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ListWrapper,
  ArticleList,
  Article,
  BottomButton,
  NoData,
  BackTop
} from '../style'
import {createGetListAction, createReadMoreAction} from '../store/actionCreators'
import {Link} from 'react-router-dom'

class MainList extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.backTop = this.backTop.bind(this)
    this.state = {
      scrollTop: 0
    }
  }

  renderArticleItem() {
    const { list } = this.props
    const jsList = list.toJS()
    return jsList.map(item => {
      return (
        <Article key={item.id}>
          <div className="article-main">
            <div className="article-title">
              <Link to={ '/detail/' + item.articleId}>{item.title}</Link>
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
        {
          this.state.scrollTop > 150
            ? <BackTop onClick={this.backTop}><i className='iconfont backTop'>&#xe600;</i></BackTop>
            : null
        }
      </ListWrapper>
    )
  }

  handleScroll() {
    const scrollTop = document.documentElement.scrollTop
    this.setState({
      scrollTop
    })
  }

  backTop() {
    if (this.state.scrollTop > 0) {
      this.setState((prevState) => ({
        scrollTop: prevState.scrollTop - 40
      }), () => {
        window.scrollTo(0, this.state.scrollTop)
        requestAnimationFrame(this.backTop)
      })
    } else {
      window.scrollTo(0, 0)
      this.setState({
        scrollTop: 0
      })
    }
  }

  componentDidMount() {
    this.props.getArticleList()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
