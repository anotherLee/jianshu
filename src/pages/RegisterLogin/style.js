import styled from 'styled-components'

export const Wrapper = styled('div')`
  display: flex; justify-content: center; align-items: center;
  position: relative;
  height: 100vh;
  background-color: #f1f1f1;
`
export const Logo = styled('img').attrs(props => ({
  src: props.url
}))`
  position: absolute;
  left: 0; top: 0;
`
export const Modal = styled('div')`
  width: 400px;
  padding: 50px 50px 30px;
  box-shadow: 0 0 8px rgba(0,0,0,.1); 
  background-color: #fff;
  border-radius: 4px;
  >.title {
    display: flex; justify-content: center;
    font-size: 18px; 
    color: #969696;
    >span {
      display: inline-block;
      padding: 10px;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      &.active {
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
    }
  }
`
export const InputWrapper = styled('div')`
  margin: 50px auto 50px;
  border-radius: 4px;
  border: 1px solid #c8c8c8;
  >.inputItem {
    height: 50px;
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom: 1px solid #c8c8c8;
    }
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    >input{
      height: 100%; width: 100%;
      padding: 0 15px;
      font-size: 16px;
      border: none;
      background-color: #fff;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
    }
  }
`
export const Button = styled('button')`
  width: 100%;
  padding: 0.5em 0;
  margin-bottom: 50px;
  background-color: #42c02e;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
export const LoginWrapper = styled('div')`
  margin: 50px auto 50px;
  border-radius: 4px;
  border: 1px solid #c8c8c8;
  >.inputItem {
    height: 50px;
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom: 1px solid #c8c8c8;
    }
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    >input{
      height: 100%; width: 100%;
      padding: 0 15px;
      font-size: 16px;
      border: none;
      background-color: #fff;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
    }
  }
`
