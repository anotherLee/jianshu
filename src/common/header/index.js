import React, {Component} from 'react'
import logo from '../../static/logo.png'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  Register,
  NavInner,
  NavItem,
  Button
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.state = {
      focused: false
    }
  }
  onFocus() {
    this.setState({
      focused: true
    })
  }
  onBlur() {
    this.setState({
      focused: false
    })
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo><img src={logo} alt=""/></Logo>
        <Nav>
          <NavInner>
            <NavItem className='nav-firstPage'><a href="/">首页</a></NavItem>
            <NavItem className='nav-download'>下载App</NavItem>
            <NavItem className={`nav-search ${this.state.focused ? 'focused' : ''}`}>
              <CSSTransition in={this.state.focused} timeout={300} classNames='move'>
                <div className="inputWrapper">
                  <input placeholder='搜索' type="text" onFocus={this.onFocus} onBlur={this.onBlur} />
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
}

export default Header
