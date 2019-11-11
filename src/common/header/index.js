import React, {Component} from 'react'
import logo from '../../static/logo.png'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  Register,
  NavInner,
  NavItem,
  Button
} from './style'
import {connect} from 'react-redux'
import * as headerActionCreator from './store/actionCreator'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {focused, onFocus, onBlur} = this.props
    return (
      <HeaderWrapper>
        <Logo><img src={logo} alt=""/></Logo>
        <Nav>
          <NavInner>
            <NavItem className='nav-firstPage'><a href="/">首页</a></NavItem>
            <NavItem className='nav-download'>下载App</NavItem>
            <NavItem className={`nav-search ${focused ? 'focused' : ''}`}>
              <CSSTransition in={focused} timeout={300} classNames='move'>
                <div className="inputWrapper">
                  <input placeholder='搜索' type="text" onFocus={onFocus} onBlur={onBlur}/>
                  <span className='search-icon-wrapper'>
                  <i className='iconfont search-icon'>&#xe6d7;</i>
                </span>
                </div>
              </CSSTransition>
            </NavItem>
          </NavInner>
          <NavInner>
            <NavItem className='nav-icon'>
              Aa
            </NavItem>
            <NavItem className='nav-login'>
              登录
            </NavItem>
          </NavInner>
        </Nav>
        <Register>
          <Button className='nav-register'>注册</Button>
          <Button className='nav-write'>
            <i className='iconfont write-icon'>&#xe603;</i>
            写文章
          </Button>
        </Register>
      </HeaderWrapper>
    )
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('component will update', nextProps)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update', prevProps)
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus() {
      const action = headerActionCreator.createSearchFocusAction()
      dispatch(action)
    },
    onBlur() {
      const action = headerActionCreator.createSearchBlurAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
