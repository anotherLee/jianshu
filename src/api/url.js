
const rootUrl = 'https://www.fastmock.site/mock/c76ae0b34ee0804f410436dc2b087068/simple'
const devOrigin = window.location.origin

const headerUrl = {
  headerListUrl: rootUrl + '/headerList',
}

const homeUrl = {
  articleListUrl: rootUrl + '/articleList',
  loadMore: rootUrl + '/addMore',
  getAuthor: rootUrl + '/getRecommend'
}

const detailUrl = {
  getArticle: devOrigin + '/jianshu/build/api/articles.json'
}

export { headerUrl, homeUrl, detailUrl }
