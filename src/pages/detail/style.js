import styled from 'styled-components'

export const ArticleWrapper = styled('div')`
  display: flex; justify-content: center;
  min-height: calc(100vh - 56px);
  background-color: #f9f9f9;
  .article {
    width: 730px; height: 100%;
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
          .badge { margin-left: 5px; vertical-align: middle }
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
      >p {
        line-height: 1.8;
        margin:32px 0 20px;
        color: rgb(64,64,64);
      }
    }
  }
`
