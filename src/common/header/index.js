import React, {Component, Fragment} from 'react'
import logo from '../../static/logo.png'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Nav,
  Register,
  NavInner,
  NavItem,
  Button,
  KeywordsWrapper
} from './style'
import {connect} from 'react-redux'
import * as headerActionCreator from './store/actionCreator'
import {createJudgeRegisterLoginAction} from '../../pages/RegisterLogin/store/actionCreators'
import { Link, withRouter } from 'react-router-dom'
import {message} from 'antd'


class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      show: true
    }
  }
  getKeywords() {
    const { focused, mouseIn, list, currentPage, handleMouseEnter, handleMouseLeave, changeHeaderList } = this.props
    const currentRange = list.toJS().slice((currentPage - 1) * 10, currentPage * 10)
    if ((focused || mouseIn) && currentRange.length > 0) {
      return (
        <KeywordsWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="title">
            <span className='hotSearch'>热门搜索</span>
            <span className='changeAnother' onClick={ e => changeHeaderList(currentPage + 1, this.spin)}>
              <i className='iconfont spin' ref={ dom => this.spin = dom }>&#xe851;</i>
              换一换
            </span>
          </div>
          <ul className='keywords'>
            {
              currentRange.map(item => {
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </KeywordsWrapper>
      )
    }
    return null
  }

  handleClick() {
    this.props.judgeRegisterLogin('login')
  }
  render() {
    const { focused, list, onFocus, onBlur } = this.props
    const isLogin = window.localStorage.getItem('isLogin')
    const userInfo = window.localStorage.getItem('userInfo')
    return (
      <Fragment>
        {
          !this.state.show
          ? null
          :
            <HeaderWrapper>
              <Link to='/'>
                <img src={logo} alt=""/>
              </Link>
              <Nav>
                <NavInner>
                  <NavItem className='nav-firstPage'><Link to='/'>首页</Link></NavItem>
                  <NavItem className='nav-download'>
                    <a rel='noopener noreferrer' href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps" target='_blank'>
                      下载App
                    </a>
                  </NavItem>
                  <NavItem className={`nav-search ${focused ? 'focused' : ''}`}>
                    <CSSTransition in={focused} timeout={300} classNames='move'>
                      <div className="inputWrapper">
                        <input placeholder='搜索' type="text" onFocus={ e => onFocus(list)} onBlur={onBlur}/>
                        <span className='search-icon-wrapper'>
                    <i className='iconfont search-icon'>&#xe6d7;</i>
                  </span>
                        {
                          this.getKeywords()
                        }
                      </div>
                    </CSSTransition>
                  </NavItem>
                </NavInner>
                <NavInner>
                  <NavItem className='nav-icon'>
                    Aa
                  </NavItem>
                  <NavItem className='nav-login' onClick={this.handleClick}>
                    <Link to='/signLogin'>{ isLogin === 'true' ? `欢迎 ${JSON.parse(userInfo).name}` : '登录'}</Link>
                  </NavItem>
                </NavInner>
              </Nav>
              <Register>
                {
                  isLogin === 'false' || !isLogin
                    ? <Button className='nav-register'><Link to='/signLogin'>注册</Link></Button>
                    : null
                }
                <Button className='nav-write' onClick={ e => { message.warning('该功能暂未开放!', 2) }}>
                  <i className='iconfont write-icon'>&#xe603;</i>
                  写文章
                </Button>
              </Register>
            </HeaderWrapper>
        }
      </Fragment>
    )
  }

  componentWillMount() {
    const pathname = this.props.location.pathname
    this.setState({
      show: pathname !== '/signLogin'
    })
  }

  componentDidMount() {
    this.props.history.listen(route => {
      this.setState({
        show: route.pathname !== '/signLogin'
      })
    })
  }

  componentWillUnmount() {
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    currentPage: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus(list) {
      dispatch(headerActionCreator.createSearchFocusAction())
      list.size === 0 && dispatch(headerActionCreator.getHeaderList())
    },
    onBlur() {
      const action = headerActionCreator.createSearchBlurAction()
      dispatch(action)
    },
    handleMouseEnter() {
      dispatch(headerActionCreator.createMouseEnterAction())
    },
    handleMouseLeave() {
      dispatch(headerActionCreator.createMouseLeaveAction())
    },
    changeHeaderList(value, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`

      dispatch(headerActionCreator.createListChangeAction(value))
    },
    judgeRegisterLogin(str) {
      dispatch(createJudgeRegisterLoginAction(str))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
