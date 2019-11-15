import styled from 'styled-components'

export const ArticleWrapper = styled('div')`
  display: flex; justify-content: center;
  min-height: calc(100vh - 56px);
  background-color: #f9f9f9;
`

export const ArticleInner = styled('div')`
  position: relative;
  width: 1000px;
`

export const ArticleContent = styled('div')`
  min-height: calc(100vh - 66px);
  width: 730px;
  margin-top: 10px; padding: 24px;
  background-color: #fff;
  border-radius: 5px;
  .article-title {
    line-height: 1.4;
    color: #404040;
    font-size: 30px; font-weight: 700;
    word-break: break-all;
  }
  .article-info {
    display: flex; margin-top: 15px;
    >.avatar {
      display: inline-block;
      height: 48px; width: 48px;
      border-radius: 50%;
      >img{
        width: 49px; height: 48px;
        border-radius: 50%;
      }
    }
    .info {
      display: flex; flex-direction: column; justify-content: space-between;
      margin-left: 8px;
      >.author-info {
        margin-top: 3px;
        display: inline-flex; align-items: center;
        .author-name { font-weight: bold; }
        .badge { margin-left: 5px; vertical-align: middle; }
        .badge > img { vertical-align: middle; width: 16px; height: 16px; }
      }
      >.article-detail{
        display: inline-flex; align-items: center;
        margin-bottom: 3px;
        >span { vertical-align: middle; margin-left: 7px; font-size: 13px; color: #969696; }
        >.starIcon { color: #E67061; vertical-align: middle; font-size: 13px; }
      }
    }
  }
  .article-content {
    p {
      line-height: 1.8;
      margin:32px 0 20px;
      color: rgb(64,64,64);
    }
  }
`

export const RecommendWrapper = styled('div')`
  position: absolute; top: 10px; left: 740px;
  width:260px;
  padding: 16px;
  background-color: #fff;
  .title {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }
`

export const RecommendItem = styled('div')`
  margin-bottom: 15px;
  .recommend-title {
    font-size: 14px; line-height: 22px;
    >a {
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }  
  .info {
    margin-top: 5px; 
    font-size: 13px;
    color: #969696;
  }
`
