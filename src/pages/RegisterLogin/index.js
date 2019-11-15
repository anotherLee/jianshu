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
import {message} from 'antd'

class RegisterLogin extends Component {
  constructor(props) {
    super(props)
    this.inputName = this.inputName.bind(this)
    this.inputPassword = this.inputPassword.bind(this)
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.getLoginName = this.getLoginName.bind(this)
    this.getLoginPassword = this.getLoginPassword.bind(this)
    this.state = {
      name: '',
      password: '',
      loginName: '',
      loginPassword: ''
    }
  }
  inputName(e) {
    this.setState({ name: e.target.value })
  }
  inputPassword(e) {
    this.setState({ password: e.target.value })
  }
  getLoginName(e) {
    this.setState({
      loginName: e.target.value
    })
  }
  getLoginPassword(e) {
    this.setState({
      loginPassword: e.target.value
    })
  }
  register() {
    const {name, password} = this.state
    const userInfo = JSON.stringify({ name, password })
    window.localStorage.setItem('userInfo', userInfo)
    window.localStorage.setItem('isLogin', 'true')
    this.props.history.push('/jianshu/build')
  }
  login() {
    const {loginName, loginPassword} = this.state
    const userInfo = JSON.parse(window.localStorage.getItem('userInfo') || "{}")
    const res = userInfo.name === loginName && userInfo.password === loginPassword
    console.log(loginName, loginPassword)
    console.log(userInfo.name, userInfo.password)
    if (res) {
      message.success('登录成功！', 2)
      this.props.history.push('/jianshu/build')
    } else {
      message.error('用户名或密码错误！', 2)
    }
  }
  choose(str) {
    this.props.switchTab(str)
  }
  renderRegister() {
    return (
      <Fragment>
        <InputWrapper>
          <div className="inputItem">
            <input type="text" value={this.state.name} placeholder='你的昵称' onChange={ this.inputName }/>
          </div>
          <div className="inputItem">
            <input type="password" placeholder='设置密码' onChange={ this.inputPassword }/>
          </div>
        </InputWrapper>
        <Button className='register' onClick={ this.register }>注册</Button>
      </Fragment>
    )
  }
  renderLogin() {
    return (
      <Fragment>
        <LoginWrapper>
          <div className="inputItem">
            <input onChange={this.getLoginName} type="text" placeholder='昵称'/>
          </div>
          <div className="inputItem">
            <input onChange={this.getLoginPassword} type="password" placeholder='密码'/>
          </div>
        </LoginWrapper>
        <Button onClick={this.login}>登录</Button>
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
