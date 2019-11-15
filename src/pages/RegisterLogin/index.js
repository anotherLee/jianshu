import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import logo from '../../static/logo.png'
import {
  Wrapper,
  Logo,
  Modal,
  InputWrapper,
  Button,
  LoginWrapper
} from './style'
import {createJudgeRegisterLoginAction} from './store/actionCreators'

class RegisterLogin extends Component {
  choose(str) {
    this.props.switchTab(str)
  }
  renderRegister() {
    return (
      <Fragment>
        <InputWrapper>
          <div className="inputItem">
            <input type="text" placeholder='你的昵称'/>
          </div>
          <div className="inputItem">
            <input type="password" placeholder='设置密码'/>
          </div>
        </InputWrapper>
        <Button className='register'>注册</Button>
      </Fragment>
    )
  }
  renderLogin() {
    return (
      <Fragment>
        <LoginWrapper>
          <div className="inputItem">
            <input type="text" placeholder='昵称'/>
          </div>
          <div className="inputItem">
            <input type="password" placeholder='密码'/>
          </div>
        </LoginWrapper>
        <Button>登录</Button>
      </Fragment>
    )
  }
  render() {
    const {which} = this.props
    return (
      <Wrapper>
        <Logo url={logo}/>
        <Modal>
          <div className="title">
            <span className={ which === 'login' ? 'active' : '' } onClick={ e => this.choose('login') }>登录</span>
            <span>∙</span>
            <span className={ which === 'register' ? 'active' : '' } onClick={e => this.choose('register')}>注册</span>
          </div>
          {
            which === 'register'
              ? this.renderRegister()
              : this.renderLogin()
          }
        </Modal>
      </Wrapper>
    )
  }
  componentDidMount() {
    const userInfo = window.localStorage.getItem('userInfo')
    this.choose(userInfo ? 'login' : 'register')
  }
}

const mapStateToProps = state => {
  return {
    which: state.getIn(['registerLogin', 'registerOrLogin'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchTab(str) {
      dispatch(createJudgeRegisterLoginAction(str))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLogin)
