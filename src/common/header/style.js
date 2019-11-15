import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  >a {
    flex: 1;
    display: inline-block;
    height: 100%;
    img {
      width: 100px; height: 100%;
      object-fit: cover;
    }
  }
`
export const Nav = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  flex-basis: 960px; height: 100%;
`

export const Register = styled.div`
  flex: 1;
  display: flex; align-items: center;
`

export const NavInner = styled.div`
  display: flex;
`

export const NavItem = styled.div`
  &.nav-firstPage {
    display: flex; align-items: center;
    a {
      color: #ea6f5a;
      text-decoration: none;
      &:visited {
        color: #ea6f5a;
      }
    }
  }
  
  &.nav-download {
    display: flex; align-items: center;
    margin-left: 2.5em;
    color: #333;
    font-size: 17px;
    cursor: pointer;
  }
  
  &.nav-search {
    margin-left: 2em;
    .inputWrapper {
      position: relative;
      width: 240px; height: 38px;
      &.move-enter-active {
        width: 320px;
        transition: width 0.3s linear;
      }
      &.move-enter-done {
        width: 320px;
      }
      &.move-exit {
        width: 320px;
      }
      &.move-exit-active {
        width: 240px;
        transition: width 0.3s linear;
      }
      
      >input {
        padding: 0 30px 0 20px;
        width: 100%; height: 100%;
        font-size: 14px;
        border: 1px solid #eee;
        background-color: #eee;
        border-radius: 40px;
        &:focus {
         outline: none;
        }
        &::placeholder {
          color: #999;
        }
      }
      .search-icon-wrapper {
        display: inline-flex; align-items: center; justify-content: center;
        height: 30px; width: 30px;
        position: absolute;
        right: 4px; top: 50%; transform: translateY(-50%);
        border-radius: 50%;
      }
      
    }
    
      
    &.focused {
      >.inputWrapper {
        .search-icon-wrapper {
          background-color: #999;
          .search-icon {
            color: #fff;
          }
        }
      }
    }
  }
  &.nav-icon {
    color: #969696;
    margin-right: 2em;
  }
  &.nav-login {
    > a {
      color: #969696;
      margin-right: 1em;
      text-decoration: none;
      color: inherit;
    }
  }
`
export const Button = styled.button`
  display: inline-flex; align-items: center;
  padding: 0.5em 1.5em;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.nav-register {
    margin-left: 20px;
    >a {
      color: #ea6f5a;
      text-decoration: none;
    }
  }
  &.nav-write {
    margin-left: 15px;
    background-color: #ea6f5a;
    color: #fff;
    > .write-icon{
      font-size: 18px;
    }
  }
`

export const KeywordsWrapper = styled.div`
  position: absolute; top: calc(100% + 8px); left: 0;
  width: 240px;
  padding: 15px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 5px;
  background-color: #fff;
  .title {
    display: flex; justify-content: space-between;
    color: #999;
    .hotSearch {
      font-size: 16px;
    }
    .changeAnother {
      display: inline-flex; align-items: center;
      font-size: 14px;
      cursor: pointer;
      .spin {
        transition: transform 0.2s linear;
        font-size: 12px;
      }
    }
  }
  .keywords {
    display: flex; align-items: center; flex-wrap: wrap;
    padding-top: 10px;
    color: #787878;
    >li {
      display: inline-block;
      vertical-align: middle;
      padding: 0.2em 0.5em;
      margin: 5px;
      border: 1px solid #999;
      font-size: 12px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`
