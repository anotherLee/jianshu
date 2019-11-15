import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex; justify-content: center;
  padding-top: 30px;
  .homeRight {
    width: 280px;
    margin-left: 40px;
  }
`

export const ListWrapper = styled.div`
  width: 625px;
  margin-left: -15px;
  .banner {
    width: 625px; height: 270px;
    border-radius: 3px;
  }
`
export const ArticleList = styled.ul`
  margin-top: 40px;
`
export const Article = styled.li`
   display: flex; align-items: center;
   padding: 15px 0 25px;
   border-bottom: 1px solid #f0f0f0;
  .article-main {
    flex: 1; margin-right: 15px;
    .article-title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 700;
      color: #333;
      >a {
        color: inherit;
        text-decoration: none;
        &:visited {
          color: inherit;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .article-desc {
      line-height: 24px;
      margin-bottom: 8px;
      font-size: 13px;
      color: #999;
    }
    .article-info {
      font-size: 12px !important; 
      color: #b4b4b4;
      >span {
        font-size: 12px;
        vertical-align: middle;
      }
      .article-star {
        display: inline-flex; align-items: center;
        margin-right: 10px;
        .star {
          margin-right: 3px;
          font-size: 12px;
          color: #E67061;
        }
      }
      .article-author {
        margin-right: 10px;
      }
      .article-like {
        display: inline-flex; align-items: center;
      }
    }
  }
  .article-photo {
    width: 150px; height: 100px;
    border-radius: 3px;
  }
`

export const BottomButton = styled.button`
  width: 100%;
  padding: 0.5em 0;
  margin: 30px auto 60px;
  color: #fff;
  background-color: #a5a5a5;
  border-radius: 20px;
  border: 1px solid #a5a5a5;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const NoData = styled.div`
  text-align: center;
  margin: 30px auto 60px;
  font-size: 14px;
  color: #666;
`

export const RecommendWrapper = styled.div`
  margin-bottom: 110px;
`

export const ContentItem = styled.div`
  width: 280px; height: 50px;
  margin-bottom: 6px;
  background: transparent url(${props => props.url}) no-repeat;
  background-size: contain;
  border-radius: 4px;
`

export const WriterWrapper = styled('div')`
  .title {
    margin-bottom: 20px;
    font-size: 14px;
    color: #969696;
  }
`
export const WriterItem = styled('div')`
  display: flex; align-items: center;
  position: relative;
  margin-bottom: 15px;
  .writerAvatar {
    width: 48px; height: 48px;
    border-radius: 50%;
  }
  .writerInfo {
    padding-left: 15px;
  }
  .counts {
    font-size: 12px;
    color: #969696;
  }
  .writerName {
    display: block;
    font-size: 14px;
    color: #333;
  }
`
export const SeeAllAuthor = styled('button')`
  width: 100%; padding: 0.5em 0;
  margin-top: 15px;
  font-size: 14px;
  background-color: #f7f7f7;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  color: #787878;
  cursor: pointer;
  >a {
    text-decoration: none;
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`

export const BackTop = styled('div')`
  display: flex; justify-content: center; align-items: center;
  position: fixed; right: 100px; bottom: 100px;
  width: 50px; height: 50px;
  border: 1px solid #dcdcdc;
  transition: all 0.2s ease-in;
  cursor: pointer;
  .backTop {
    font-size: 30px;
    color: #666;
  }
`
