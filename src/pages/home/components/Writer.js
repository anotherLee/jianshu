import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterItem,
  SeeAllAuthor
} from '../style'
import { createGetAuthorAction } from '../store/actionCreators'

class Writer extends Component {
  constructor(props) {
    super(props)
  }
  renderAuthorList() {
    const { authorList } = this.props
    const jsAuthorList = authorList.toJS()
    return jsAuthorList.map(author => {
      return (
        <WriterItem key={author.id}>
          <img className='writerAvatar' src={author.url} alt=""/>
          <div className='writerInfo'>
            <span className='writerName'>{author.name}</span>
            <span className='counts'>写了{author.counts}字 ∙ {author.likeCount}喜欢</span>
          </div>
        </WriterItem>
      )
    })
  }
  render() {
    return (
      <WriterWrapper>
        <div className="title">推荐作者</div>
        {this.renderAuthorList()}
        <SeeAllAuthor>
          <a target='_blank' href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users">
            查看全部
          </a>
        </SeeAllAuthor>
      </WriterWrapper>
    )
  }
  componentDidMount() {
    this.props.getAuthors()
  }
}

const mapStateToProps = (state) => {
  return {
    authorList: state.getIn(['home', 'authorList'])
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    getAuthors() {
      dispatch(createGetAuthorAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Writer)
