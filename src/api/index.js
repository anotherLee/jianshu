import { headerUrl, homeUrl } from "./url"
import axios from 'axios'

export const acquireHeaderList = () => {
  return axios({
    url: headerUrl.headerListUrl,
    method: 'get'
  })
}

export const acquireArticleList = () => {
  return axios({
    url: homeUrl.articleListUrl,
    method: 'get'
  })
}

export const acquireMoreArticle = () => {
  return axios({
    url: homeUrl.loadMore,
    method: 'get'
  })
}

export const acquireAuthor = () => {
  return axios({
    url: homeUrl.getAuthor,
    method: 'get'
  })
}
